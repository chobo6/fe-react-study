

function Basic01(){

    let hello = "안녕하세요";
    let hello2 = "Nice to meet you";

    let himsg = "";

    for(let i=1; i<=10; i++){
        himsg += "안녕~";
    }

    let flag = false;

    // flag : true -> hello
    // flag : false -> hello2

    // Ctrl + /
    // Ctrl + k + c
    // Alt + Shift + a
    
    return(
        <div className="App">
            <h1>React Basic01</h1>
            <h2 className="font-red">{hello}</h2>
            {
                // 삼항연산자
                flag == true ? <h2>{hello2}</h2> : <h2>{hello}</h2>
            }
            {/* <h2>{hello2}</h2> */}
            {
                flag == false && <h2>{hello2}</h2>
            }
            {
                flag == true && <h2>{hello2}</h2>
            }
            <h2 style={{color:'blue', fontSize:'20px'}}>{himsg}</h2>
        </div>
    )
}

export default Basic01;