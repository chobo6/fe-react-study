import { useState } from "react";
import './Quiz01.css';

function Quiz01(){
    let [num, setNum] = useState(0);

    return(
        <div>
            <button onClick={()=>{
                setNum(num+2);
                console.log(num);
            }}>짝수출력</button>
            <span className="font-red">{num}</span>
        </div>
    )
}

export default Quiz01;