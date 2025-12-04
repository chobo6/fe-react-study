
// function Box(props){    // props = {text:'아침', detail:'배고프다'}
//     return(
//         <div style={{backgroundColor:'gray'}}>
//             <h1>{props.text}</h1>
//             <p>{props.detail}</p>
//             {/* <h1>구분제목</h1>
//             <p>구분디테일</p> */}
//         </div>
//     )
// }

function Box({text, detail}){    
    // props = {text:'아침', detail:'배고프다'}
    // {text, detail} = {text:'아침', detail:'배고프다'}
    return(
        <div style={{backgroundColor:'gray'}}>
            <h1>{text}</h1>
            <p>{detail}</p>
            {/* <h1>구분제목</h1>
            <p>구분디테일</p> */}
        </div>
    )
}
export default Box;