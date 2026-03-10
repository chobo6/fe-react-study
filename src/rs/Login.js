import { useState } from "react";
import axios from "axios";

function Login(){

    let [id, setId] = useState('');
    let [pw, setPw] = useState('');

    return (
        <div>
            <h1>React Spring API Login</h1>

            <p> id :  <input type="text" onChange={(e)=>{setId(e.target.value)}}></input> </p>
            <p> pw :  <input type="password" onChange={(e)=>{setPw(e.target.value)}}></input></p>


            <button onClick={()=>{
                //로그인 버튼 클릭

                // id, pw -> json -> 서버 /api/login 요청    post

                // axios.post( url, dataBody, header).then().catch()

                axios.post('/api/login',
                    {               //post http 요청에 담아서 보낼 body  데이터   json  key:value
                        id: id,
                        pw: pw      //pw 키값 : pw state변수값
                    },
                    {
                        headers : {
                            'Content-Type':'application/json'
                        }
                    }
                ).then(
                    (response)=>{
                        console.log(response.data);
                        
                        //response.data  단순 텍스트

                        // response.data  {header:{resultCode:"", resultMsg:""}, body:{}}
                        // response.data.header.resultCode == '200'

                        if(response.data == 'loginOk'){  //로그인 성공
                            // 로그인 성공했다고 메시지 보여주던가
                            // 성공했으니, 마이페이지 혹은 다음페이지 혹은 메인페이지 등등 다른 페이지로 이동
                            // ReactRouter ->  navigate("/main")
                            console.log('로그인 성공');
                        } else { //로그인 실패
                            // 로그인 실패
                            // 다시시도하라고 안내문구
                            console.log('로그인 실패');
                        }

                    }
                )
                .catch(error => { console.log(error) })

            }}>로그인</button>


            <div>
                <button onClick={()=>{
                    axios.post('/api/loginCheck')
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))
                }}>로그인여부확인버튼</button>
            </div>

            
            <div>
                <button onClick={()=>{
                    //로그인 시도 
                    //id,pw -> 서버로 로그인 요청 전달

                    axios.post('/api/loginJWT',
                    {               //post http 요청에 담아서 보낼 body  데이터   json  key:value
                        id: id,
                        pw: pw      //pw 키값 : pw state변수값
                    },
                    {
                        headers : {
                            'Content-Type':'application/json'
                        }
                    }
                ).then(
                    (response)=>{
                        console.log(response.data);  // JWT accessToken
                        
                        let token = response.data;  //JWT token

                        //관리 -> 계속 인식되도록 보관 -> localStorage 브라우저
                        
                        //state -> props 
                        //Redux 
                        //localStorage
                        //cookie
                        
                        if(token != null && token != '') { //단순텍스트 처리
                            //발급된 토큰이 수신됐다.
                            // 잘 저장 -> 다음에 요청할때 토큰같이 담아서 요청 (ex 자유이용권 제시)

                            // 토큰 -> localstorage 저장
                            // localStorage.setItem(key, value)
                            // localStroage.getItem(key)
                            localStorage.setItem('token', token);
                        }

                        //로그인 성공 or 실패?
                        // 다음 페이지 전환처리 ...  실패메시지 ... 


                        //apiResponse -> header:resultCode   body:{accessToken:"asodjfoiasjfiasjfasijfo"}

                    }
                )
                .catch(error => { console.log(error) })

                }}>로그인JWT방식</button>
                
                <button onClick={()=>{

                    
                    let token = localStorage.getItem('token');

                    axios.post(
                        '/api/loginCheckJWT',
                        {},
                        {
                            headers :{
                                'Content-Type':'application/json',
                                'Authorization' : "Bearer " + token
                            }
                        }
                    )
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))

                }}>로그인여부확인버튼JWT방식</button>
            </div>


        </div>
        
    )

}

export default Login;