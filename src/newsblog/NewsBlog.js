import { useState } from 'react';
import './NewsBlog.css';
import Modal from './Modal';


function NewsBlog(){

    // 하드코딩(텍스트를 직접) vs 변수 vs state변수
    let title = "React Study";

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);

    let [likeCount, setLikeCount] = useState([]);

    let [modalFlag, setModalFlag] = useState(false);

    return(
        <div>
            <div className='black-nav'>
                <h3>Blog Header</h3>
                <div style={{color:'orange', fontSize:'20px'}}>{title}</div>
            </div>

            {
                news.map((news, index)=>{
                    likeCount.push(0);
                    return  <div className='post-list'>
                                <h4 onClick={()=>{
                                setModalFlag(!modalFlag);
                            }}>{news} 
                            <span onClick={(event)=>{
                                        event.stopPropagation();
                                        let temp = [...likeCount];
                                        temp[index] += 1;
                                        setLikeCount(temp);
                                    }}>❤</span> {likeCount[index]}
                                </h4>
                                <p>내용</p>
                            </div>
                })
            }
            {/* <div className='post-list'>
                <h4 onClick={()=>{

                    setModalFlag(!modalFlag); // !true -> false     !false -> true

                    // setModalFlag(modalFlag ? false : true);

                    if(modalFlag == true){
                        setModalFlag(false);
                    }else{
                        setModalFlag(true);
                    }
                }}>{news[0]} 
                    <span onClick={(event)=>{
                        // event.preventDefault();
                        event.stopPropagation(); // 이벤트 발생을 추가로 전파(전달) stop
                        setLikeCount(likeCount + 1); // 하트갯수 증가 + 재렌더링
                    }}>❤</span> {likeCount}
                </h4>
                <p>내용</p>
            </div>
            <div className='post-list'>
                <h4>{news[1]}</h4>
                <p>내용</p>
            </div>
            <div className='post-list'>
                <h4>{news[2]}</h4>
                <p>내용</p>
            </div> */}

            {/* <div className='post-list'>
                <h4>오늘의 뉴스</h4>
                <p>내용</p>
            </div>
            <div className='post-list'>
                <h4>{news2}</h4>
                <p>내용</p>
            </div>
            <div className='post-list'>
                <h4>{news3}</h4>
                <p>내용</p>
            </div> */}

            {
                // modalFlag == true ? <Modal /> : null
            }
            {
                modalFlag && <Modal />
            }
        </div>
    )
}

export default NewsBlog;