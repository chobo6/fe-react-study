import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";

function Detail( {foods} ){

    // path="/detail/:id"
    // 저 경로에 붙어있는 :id 위치에 뭐가 들어왔느냐

    let {id} = useParams(); // 경로에 있는 값 읽어오기
    console.log(id);
    // id : fd001

    // id를 확인 -> foods 배열 데이터에서 id값이 같은 food를 찾고 -> 이 food를 화면에 표시

    let food = foods.find((item)=>{
        return item.id == id;
    })

    if(food == undefined || food == null){
        return(
            <div>
                <h1>없는 상품입니다.</h1>
                <h2>잘못된 접근.</h2>
            </div>
        )
    }
    
    return(
        <Container>
            <Row>
                <Col md={6}>
                    <img src={process.env.PUBLIC_URL + food.imgPath} width="100%" />
                </Col>
                <Col md={6}>
                    <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                    <p>{food.content}</p>
                    <p>{food.price}</p>
                    <p>
                        <Button variant="dark">-</Button>
                        <span> 0 </span>
                        <Button variant="dark">+</Button>
                    </p>

                    <Button variant="primary">주문하기</Button>
                </Col>
            </Row>
</Container>
    )
}

export default Detail;