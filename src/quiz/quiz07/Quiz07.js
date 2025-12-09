import { Routes, Route, useNavigate, Link } from 'react-router';
import Mypage from './Mypage';

function Quiz07() {

    //Link to
    //navigate
    let navigate = useNavigate();

    return (
        <div>

            <div>
                <button onClick={() => { navigate("/") }}>main</button>
                <button onClick={() => { navigate("/info") }}>/info</button>
                <button onClick={() => { navigate("/mypage") }}>/mypage</button>
                <button onClick={() => { navigate("/cart") }}>/cart</button>
                {/* <button><Link to="/">main</Link></button>
        <button><Link to="/info">/info</Link></button>
        <button><Link to="/mypage">/mypage</Link></button>
        <button><Link to="/cart">/cart</Link></button> */}
            </div>

            <Routes>
                <Route path="/" element={<div>main 공간</div>} />
                <Route path="/info" element={<div>info 공간</div>} />
                <Route path="/mypage" element={ <Mypage /> } />
                <Route path="/cart" element={<div>cart 공간</div>} />
            </Routes>

        </div>
    );
}

export default Quiz07;