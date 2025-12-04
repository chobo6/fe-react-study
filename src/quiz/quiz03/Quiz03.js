import Component from "./Component";
import './Quiz03.css';

function Quiz03(){
    let titleArr = ['하나', '둘', '셋', '넷', '다섯'];
    let detailArr = ['내용하나', '내용둘', '내용셋', '내용넷', '내용다섯'];

    return (
        <div>
        {/* <div className="App">
            <div className='textItem'>
                <p className='title'>제목 : 하나</p>
                <p>내용 : 내용하나</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : 둘</p>
                <p>내용 : 내용둘</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : 셋</p>
                <p>내용 : 내용셋</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : 넷</p>
                <p>내용 : 내용넷</p>
            </div>
            <div className='textItem'>
                <p className='title'>제목 : 다섯</p>
                <p>내용 : 내용다섯</p>
            </div>
        </div> */}
        {
            titleArr.map((title, index)=>{
                return <Component title={titleArr[index]} detail={detailArr[index]}/>
            })
        }
        </div>
    );
}

export default Quiz03;