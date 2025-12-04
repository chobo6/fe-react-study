
function Component({title, detail}){
    return(
        <div>
            <div className='textItem'>
                <p className='title'>제목 : {title}</p>
                <p>내용 : {detail}</p>
            </div>
            {/* <hr/> */}
        </div>
    )
}

export default Component;