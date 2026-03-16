import './AppRS.css';

import { useState } from 'react';
import axios from 'axios';
import DrinkItem from './DrinkItem';

// React Spring API 통신 연동

function AppRS(){

    // 서버와 API 통신 -> 라이브러리
    // ajax fetch XMLHttpRequest axios
    // axios

    // npm install axios

    let [drinkList, setDrinkList] = useState(
        [
            {
                name:'자몽티',
                type:'차'
            },
            {
                name:'유자차',
                type:'차'
            }
        ]
    );

    let [typeFlag, setTypeFlag] = useState(true);
    let [num, setNum] = useState(0);

    return (
        <div>
            <h1>AppRS 페이지 - React Spring 통신</h1>

            <div>
                <button onClick={()=>{

                    // axios
                    // axios.get(url경로);

                    // Client(브라우저) --------------------------> Spring 8080 (tomcat)

                    // Client(브라우저) ---> React 3000 (Node) ---> Spring 8080 ---> React --> Client

                    // localhost:3000 -> React  (FE)
                    // localhost:8080 -> Spring (BE)


                    // axios.get('http://localhost:8080/api/getMsg')
                    // CORS Policy 정책 오류

                    // axios.get('http://localhost:3000/api/getMsg')
                    axios.get('/api/getMsg')
                        .then(response => console.log(response.data)) // 결과 수신 출력
                        .catch(
                            (error) => {
                                console.log(error);
                            }
                        ) // 예외 발생 수행
                }}>서버 데이터 요청 get axios</button>
            </div>

            <div>
                <button onClick={()=>{
                    axios.get('/api/getDrinks')
                        .then(response => {
                            console.log(response);
                            console.log(response.data);

                            // let temp = [...drinkList, ...response.data];
                            // setDrinkList(temp);

                            // response.data = 보여줄 객체 데이터들
                            let temp = [...drinkList];
                            response.data.map((item)=>{
                                temp.push(item);
                            })
                            setDrinkList(temp);
                        })
                        .catch(
                            error => {
                                console.log(error);
                            }
                        )
                }}>서버 getDrinks 요청 Json 응답</button>
            </div>

            <div>
                <button onClick={()=>{

                    // 파라미터
                    // get 방식 url 포함
                    // /api/getDrinksDiv?type=커피
                    // /api/getDrinksDiv?type=차
                    let paramType = '';

                    paramType = typeFlag ? '커피' : '차';
                    setTypeFlag(!typeFlag);

                    axios.get('/api/getDrinksDiv?type=' + paramType)
                        .then(response => {
                            console.log(response.data);

                            let temp = [...drinkList, ...response.data];
                            setDrinkList(temp);
                        })
                        .catch(
                            error => {
                                console.log(error);
                            }
                        )

                }}>데이터 요청 구분 파라미터 포함 get 방식 url에 param</button>
            </div>

            <div>
                <button onClick={()=>{

                    setNum(num + 1);

                    // axios.post(URL, bodyData, header)
                    axios.post('/api/getDrinksNum',     // 경로, 보내려고 하는 데이터, 기타 header 설정
                        {num:num, type:'test'},  // JSON 포맷으로 보내기
                        // String(num),                // 단순 텍스트로 보내기
                        {
                            headers:{
                                'Content-Type' : 'application/json'
                                //               'text/plain'
                            }
                        }
                    )
                    .then(response => {
                        console.log(response.data);
                        let temp = [...drinkList, ...response.data];
                        setDrinkList(temp);
                    })
                    .catch(error => {console.log(error);})
                }}>데이터 요청 POST body에 data 담아서 요청</button>
            </div>

            <div>
                {
                    drinkList.map((item, index) => {
                        return <DrinkItem drinkItem={item}/>
                    })
                }
            </div>
        </div>
    )

    /*
        리덕스(툴킷) 라이브러리 설치
        npm install @reduxjs/toolkit
        npm install react-redux
    */

}

export default AppRS;