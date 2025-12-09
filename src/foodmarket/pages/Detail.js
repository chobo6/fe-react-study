import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import './Detail.css';

function Detail( {foods} ){

    // localStorage 사용

    // 읽기 localStorage.getItem(키)
    // 쓰기 localStorage.setItem(키, 값)
    // 삭제 localStorage.removeItem(키, 값)
    localStorage.setItem('content1', '오늘은 날씨가 춥다');
    localStorage.setItem('time', 1424);
    console.log(localStorage.hi);


    let tempFood = {
        id : 'fd002',
        title : "Hamburger",
        content : "완전식품 햄버거",
        price : 11000,
        imgPath: '/images/food3.jpg',
        stockCount: 0
    }
    // localStorage.setItem('tempFood', tempFood); // [object Object]
    localStorage.setItem('tempFood', JSON.stringify(tempFood));

    // JSON
    // js객체 -> 문자열 JSON.stringify()

    // 문자열 -> js객체 JSON.parse()
    let jsonObj = JSON.parse(localStorage.getItem('tempFood'));
    console.log(jsonObj.title);
    console.log(jsonObj.price);

    let [orderCount, setOrderCount] = useState(0);
    let [test, setTest] = useState(0);

    let [viewStatus, setViewStatus] = useState('');

    let [modalShow, setModalShow] = useState(true); // 모달 창 표시 여부

    // path="/detail/:id"
    // 저 경로에 붙어있는 :id 위치에 뭐가 들어왔느냐

    let {id} = useParams(); // 경로에 있는 값 읽어오기
    console.log(id);
    // id : fd001

    // id를 확인 -> foods 배열 데이터에서 id값이 같은 food를 찾고 -> 이 food를 화면에 표시

    let food = foods.find((item)=>{
        return item.id == id;
    })
    
    // useEffect(실행할 함수, 의존성배열)
    // useEffect(실행할 함수)
    // useEffect(실행할 함수 { return ()=>{clean up function} }, 의존성배열)

    useEffect(()=>{
        console.log('useEffect 실행 (의존성배열 없음)')
    }); // 의존성배열 X -> 로딩되는 매번 실행

    useEffect(()=>{
        console.log('useEffect 실행, [] 빈 의존성배열')
    }, []); // 빈 배열 -> 로딩 1회 실행

    useEffect(()=>{
        console.log('useEffect 실행, [orderCount] 의존성배열')

        return ()=>{ // clean up funciton
            console.log('useEffect 실행, [orderCount] -> return 실행')
        }
    }, [orderCount]); // 의존성배열에 값 존재

    useEffect(()=>{
        console.log('useEffect 실행, [test] 의존성배열')
    }, [test]);

    useEffect(()=>{
        console.log('setViewStatus end 처리')
        // setViewStatus('end')
        
        setTimeout(()=>{
            setViewStatus('end')
        }, 300)
    }, [])

    // Modal 창 안보이게 적용
    useEffect(()=>{
        // modalShow    true -> false 2초 후
        let tmout = setTimeout(()=>{
            setModalShow(false);
        }, 2000) // ms 2초

        // setTimeout
        // setInterval
        // 비동기작동 방식
        
        // clearInterval
        // clearTimeout
        return ()=>{
            clearTimeout(tmout);
        }
    }, [])


    if(food == undefined || food == null){
        return(
            <div>
                <h1>없는 상품입니다.</h1>
                <h2>잘못된 접근.</h2>
            </div>
        )
    }


    // 스타일 적용

    /* 
        조건에 따라서 다른 스타일 적용
        가격표시
            1만원 이상 -> 빨간색
            1만원 미만 -> 파란색

            1) js 객체

            // <p style={ {color:'red', fontSize:'20px'} }>{food.price}</p>

            const priceTextStyle ={
                color: food.price >= 10000 ? 'red' : 'blue'     // color:'red'   color:'blue'
            }
            <p style={priceTextStyle}>{food.price}</p>

            // <p style={ {color: food.price >= 10000 ? 'red' : 'blue'} }>{food.price}</p>


            2) js 함수 방식

            const priceTextStyleFunc = (price)=>{
                if(price >= 10000){
                    return {color : 'red'};
                } else {
                    return {color : 'blue'};
                }

                // return {color: food.price >= 10000 ? 'red' : 'blue'};
            }
            <p style={priceTextStyleFunc(food.price)}>{food.price}</p>
            

            3) css 클래스 사용 연계

            // 클래스 이름 단일
            <p className={ food.price >= 10000 ? 'price-red' : 'price-blue' }>{food.price}</p>

            // 여러개 클래스
            <p className={ 'text-strong ' + (food.price >= 10000 ? 'price-red' : 'price-blue') }>{food.price}</p>

            // className에 들어가는 변수형태로 활용
            const priceTextClassName = (food.price >= 10000 ? 'price-red' : 'price-blue');
            <p className={ 'text-strong ' + priceTextClassName }>{food.price}</p>

            // 배열의 join 함수
            ['text-strong', 'price-red'].join(" ")  'text-strong price-red'
            <p className={ ['text-strong', (food.price >= 10000 ? 'price-red' : 'price-blue')].join(" ") }>{food.price}</p>
    
            // 백틱 문자 활용
            <p className={ `text-strong ${food.price >= 10000 ? 'price-red' : 'price-blue'}` }>{food.price}</p>
    
            4) css 클래스 + useState + useEffect 조합 활용 -> 효과 발생

            let [viewStatus, setViewStatus] = useState('');
            useEffect(()=>{
                setTimeout(()=>{
                    setViewStatus('end')
                }, 300)
            }, [])

            <Container className={"start " + viewStatus}>
    */

    const priceTextStyle ={
        color: food.price >= 10000 ? 'red' : 'blue'     // color:'red'   color:'blue'
    }
    
    const priceTextStyleFunc = (price)=>{
        if(price >= 10000){
            return {color : 'red'};
        } else {
            return {color : 'blue'};
        }

        // return {color: food.price >= 10000 ? 'red' : 'blue'};
    }

    const priceTextClassName = (food.price >= 10000 ? 'price-red' : 'price-blue');
    
    // js 객체로 내부에서 정의 후 사용

    const styles = {

        redStyle : {    // styles.redStyle
            color: 'red'
        },
        blueStyle : {   // styles.blueStyle
            color: 'blue'
        },
        fontBigBold: {  // styles.fontBigBold
            fontSize: '36px',
            fontWeight: 'bold'
        },
        titleStyle: {
            paddingTop: '30px',
            fontSize: '40px',
            fontWeight: 'bold'
        }

    };

    // <div class="big box container">
    return(
        <Container className={"start " + viewStatus}>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    <p style={styles.fontBigBold}>{food.content}</p>

                    <p style={priceTextStyle}>{food.price}</p>
                    <p style={priceTextStyleFunc(food.price)}>{food.price}</p>
                    <p className={ food.price >= 10000 ? 'price-red' : 'price-blue'}>{food.price}</p>
                    <p className={ 'text-strong ' + (food.price >= 10000 ? 'price-red' : 'price-blue') }>{food.price}</p>
                    <p className={ 'text-strong ' + priceTextClassName }>{food.price}</p>
                    <p className={ ['text-strong', (food.price >= 10000 ? 'price-red' : 'price-blue')].join(" ") }>{food.price}</p>
                    {/*             ['text-strong', 'price-red'] -> 'text-strong price-red
                                    ['text-strong', 'price-blue'] -> 'text-strong price-blue 
                                    배열.join(" ")
                    */}
                    <p className={ `text-strong ${food.price >= 10000 ? 'price-red' : 'price-blue'}` }>{food.price}</p>
                    
                    <p>
                        <Button variant="dark" onClick={()=>{
                            if(orderCount > 0)
                                setOrderCount(orderCount - 1);
                            // orderCount <= 0 ? console.log('error') : setOrderCount(orderCount - 1);
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dark" onClick={()=>{
                            if(orderCount < food.stockCount)
                                setOrderCount(orderCount + 1);
                            // orderCount >= food.stockCount ? console.log('error') : setOrderCount(orderCount + 1);
                        }}>+</Button>
                    </p>
                    
                    {
                        food.stockCount == 0 ? <Button variant="secondary">품절</Button> : <Button variant="primary">주문하기</Button>
                    }
                    
                </Col>
            </Row>
            
            <Modal show={modalShow} onHide={()=>{ setModalShow(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title>환영합니다~</Modal.Title>
                </Modal.Header>
                <Modal.Body>저희 음식 맛있어요~</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{ setModalShow(false) }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Detail;