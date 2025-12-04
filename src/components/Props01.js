import Box from "./Box";


function Props01(){

    let arr1 = ['아침', '점심', '저녁'];
    let detail = ['배고프다', '졸리다', '피곤하다'];

    return(
        <div>

            {
                // 아침 0   점심 1   저녁 2
                arr1.map((item, index)=>{
                    // return <Box text={item} detail={detail[index]}/>
                    return <Box text={arr1[index]} detail={detail[index]}/>
                })
            }
            <Box text={arr1[0]} detail={detail[0]}/>
            <Box text={arr1[1]} detail={detail[1]}/>
            <Box text={arr1[2]} detail={detail[2]}/>

            {/* <div style={{backgroundColor:'gray'}}>
                <h1>{arr1[0]}</h1>
                <p>{detail[0]}</p>
            </div>

            <div style={{backgroundColor:'gray'}}>
                <h1>{arr1[1]}</h1>
                <p>{detail[1]}</p>
            </div>

            <div style={{backgroundColor:'gray'}}>
                <h1>{arr1[2]}</h1>
                <p>{detail[2]}</p>
            </div> */}

        </div>
    )
}

export default Props01;