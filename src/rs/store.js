import {configureStore, createSlice} from '@reduxjs/toolkit';


// 중앙집중 전역 상태관리

// 객체 관리 
// 데이터 저장 변수 ... + getter, setter 함수형으로 데이터 관리

// 객체.변수 = -50;
// 객체.set변수(-50);

// let [userId, setUserId] = useState('');

let userSlice = createSlice({
    name : 'userId',
    initialState : 'initdefaultId',
    reducers : {  // 함수들 (getter setter)
        saveUserId(state, action){    //  saveUserId('myabcd');
            console.log(action.payload);   //'myabcd'

            return action.payload;  //'myabcd'      userId = 'myabcd'   setUserId('myabcd')
        },
        clearUserId(state){    //   clearUserId();
            return "clear";  // 단순텍스트 return  ---> 저장할 값으로 전달 ---> state 값에 저장
        }
    }
})
//보유한 수행 함수들을 export

export let { saveUserId, clearUserId } = userSlice.actions;
//actions : 상태관리하는 변수(slice) 에 속해있는 상태변경 함수들이 모여있는 객체


//let bgSlice = createSlice({
//let nameSlice = createSlice({
//let adminSlice = createSlice({


// store 설정
// store 리덕스 기준 전체 데이터 저장하는 객체 (저장소)
export default configureStore({
    reducer: {
        user : userSlice.reducer
    }
})