import { useState } from "react";

function State03(){
    /* { key : value,
         key : [] } */

    // [ ㅇ, ㅇ, ㅇ]
    // [ {}. {}. {} ]

    // let arr = [1, 2, 3, 4, 5];
    let [arr, setArr] = useState([1, 2, 3, 4, 5]);

    const btn_func = ()=>{
        // 배열에 값 추가   unshift push    splice...
        // [1, 2, 3, 4, 5]
        // arr.push(9); // [1, 2, 3, 4, 5, 9];
        // setArr(arr); 재렌더링이 발생하지 않음

        // let temp = arr; // [1, 2, 3, 4, 5]
        let temp = [...arr]; // 배열 깊은 복사  [   ...[1, 2, 3, 4, 5]  ]
        temp.push(9); // [1, 2, 3, 4, 5, 9]
        setArr(temp);
        console.log(arr);
    }

    return(
        <div>
            <button onClick={btn_func}>버튼</button>
            {
                arr.map((val)=>{
                    return <p>{val}</p>
                })
            }
        </div>
    )
}

export default State03;