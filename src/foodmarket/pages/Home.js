import {Container, Row, Col} from "react-bootstrap";
import FoodCard from "../components/FoodCard";

function Home({foods}){
    
    return(
        <div>
            {/* <div className='main-bg' style={{backgroundImage:'url(' + banner_bg + ')'}}></div> */}

            <div className='main-bg'></div>
            
            <Container>
                <Row>
                    {
                        foods.map((food, index)=>{
                            return(<Col md={4} sm={2}>
                                <FoodCard food={food} foods={foods} index={index}/>
                            </Col>)
                        })
                    }
                </Row>
            </Container>
        </div>
    )
    
}

export default Home;