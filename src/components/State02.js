

function State02(){

    // 실제 데이터 여러개로 반복
    let msgArr = ["안녕", "안녕2", "안녕3", "안녕4"];

    // 단순 반복용도로 사용할 배열
    let numArr = [0, 0, 0, 0];

    // 화면에 여러개 표시하는 내용을 반복문으로

    // element
    let elArr = []; // [<p>Hi Hello~</p>, <p>Hi Hello~</p>, <p>Hi Hello~</p> ...]
    for(let i=1; i<=5; i++){    // 5번 반복
        elArr.push(<p>Hi Hello~</p>);
    }

    let text = "";
    for(let i=1; i<=5; i++){
        text += "<p>Hi Hello~</p>";
    }
    return(
        <div>
            {
                msgArr.map((msg)=>{
                    return (
                    <p>{msg}</p>
                    );
                })
            }
            
            <hr/>

            {
                numArr.map(()=>{
                    return (
                        <p>안녕하세요</p>
                    );
                })
            }

            <hr/>

            {elArr}

            <hr/>

            {text}
        </div>
    )
}

export default State02;