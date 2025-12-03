import { useState } from "react";


function State01(){

    // React Hooks
    // useState -> 상태를 저장하는 변수

    // state 변수 값이 set함수를 통해서 변경 된 경우! -> 화면 재렌더링 (re-rendering)

    let cnt = 0;    // 일반변수 -> 재렌더링 시점에 다시 호출돼서 또 초기화가 됨. (값 유지X)
    // const|let [변수명, set함수명]= useState(초기값);
    let [count, setCount] = useState(0);
    let [num, setNum] = useState(0);

    return(
        <div className="App">
            <h1>State01</h1>
            <p>{cnt}</p>

            <button onClick={()=>{
                console.log("cnt증가버튼 클릭됨");
                cnt++;
                console.log(cnt);

                // num 끼워넣기
                num++;
                console.log(num);
            }}>cnt증가버튼</button>

            <br></br>

            <p>{count}</p>
            <button onClick={()=>{
                console.log("count증가버튼 클릭됨");
                // count++;     //값 증가O (값 변화O), 재렌더링X why? set함수를 통해서 값을 바꾸지 않아서...
                setCount(count + 1);    // 재렌더링 발생!
                setNum(num); // 재렌더링 발생 조건O -> 인근에 있는 재렌더링 요소를 모아서 한번에 수행!
                console.log(count);
            }}>count증가버튼</button>
        </div>
    )

    // p선택.textContent = cnt++;
}

export default State01;