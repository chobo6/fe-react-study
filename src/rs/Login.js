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

        </div>
        
    )

}

export default Login;