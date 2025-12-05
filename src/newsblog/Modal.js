function Modal(props) { // {news, setNews, bgColor, title}
    return (
        <div className="modal" style={{backgroundColor:props.bgColor}}>
            <h3>{props.title}❤{props.likeCount}</h3>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={()=>{
                // '긴급뉴스'
                let temp = [...props.news];
                temp[0] = '긴급뉴스';
                props.setNews(temp);
            }}>
                첫글 제목 긴급변경
            </button> 
        </div>
    );
}

export default Modal;