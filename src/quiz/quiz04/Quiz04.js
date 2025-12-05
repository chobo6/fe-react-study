import { useState } from 'react';
import './Quiz04.css'

function Quiz04(){
    let [arr, setArr] = useState([]);

    let [boxes, setBoxes] = useState([<div className='box'>박스</div>, <div className='box'>박스</div>]);

    // for(let i=1; i<=10; i++){
    //     boxes.push(<div className='box'>박스</div>);
    // }
    return(
        <div>
            <button onClick={()=>{
                // arr 배열의 길이 늘려주기
                let temp = [...arr, 1];
                // temp.push(1);
                setArr(temp);
            }}>추가</button>
            <br/><br/>
            {
                arr.map(()=>{
                    return <div className='box'>박스</div>
                })
            }
            
            {
                boxes
            }
            <button onClick={()=>{
                // arr 배열의 길이 늘려주기
                let temp = [...boxes];
                temp.push(<div className='box'>박스</div>);
                setBoxes(temp);
            }}>추가</button>
        </div>
    )
}

export default Quiz04;