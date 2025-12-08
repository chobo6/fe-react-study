import { useState } from "react";
import './Quiz06.css';

function Quiz06(){
    let [arr, setArr] = useState([]);
    return(
        <div>
            <button onClick={()=>{
                let temp = [...arr, 'red'];
                setArr(temp);
            }}>앞빨간박스추가</button>
            <button onClick={()=>{
                let temp = [...arr, 'blue'];
                setArr(temp);
            }}>앞파란박스추가</button>
            <button onClick={()=>{
                let temp = [...arr, 'green'];
                setArr(temp);
            }}>앞초록박스추가</button>
            <button onClick={()=>{
                let temp = ['red', ...arr];
                setArr(temp);
            }}>뒤빨간박스추가</button>
            <button onClick={()=>{
                let temp = ['blue', ...arr];
                setArr(temp);
            }}>뒤파란박스추가</button>
            <button onClick={()=>{
                let temp = ['green', ...arr];
                setArr(temp);
            }}>뒤초록박스추가</button>
            <button onClick={()=>{
                let temp = [...arr];
                temp.pop()
                setArr(temp);
            }}>앞 박스 삭제</button>
            <button onClick={()=>{
                let temp = [...arr];
                temp.shift();
                setArr(temp);
            }}>뒤 박스 삭제</button>
            {
                arr.map((col, i)=>{
                    return <div className='box' style={{backgroundColor:col}}>
                        <button onClick={()=>{
                            let temp = [...arr];
                            temp.splice(i, 1);
                            setArr(temp);
                        }}>X</button>
                    </div>
                })
            }
        </div>
    )
}

export default Quiz06;