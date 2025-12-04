import { useState } from "react";

function Quiz02(){
    let txtArr= ['하나', '둘', '셋'];
    let [index, setIndex] = useState(0);
    
    // let [txt,setTxt] = useState("하나");

    return(
        <div className="App">
            <p>{txtArr[index]}</p>
            <button onClick={()=>{

                // index 0 1 2 0 1 2 0 1 2

                // index = (index+1) > 2 ? 0 : (index + 1);

                // idnex= index + 1;
                // if(index > 2){
                //      index = 0;
                // }
                // setIndex(num + 1);
                // if(num > 3){
                //     setNum(0);
                // }
                // console.log(num);
                setIndex((index+1) % txtArr.length);

                /* if(txt == "하나")
                    setTxt("둘");
                else if(txt == "둘")
                    setTxt("셋");
                else
                    setTxt("하나"); */
            }}>변경버튼</button>
        </div>
    )
}

export default Quiz02;