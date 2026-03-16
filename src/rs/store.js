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
        },
        saveUserInfo(state, action){ //객체(json) 단위로 값 전달 받기
            console.log(action.payload);
            //dispatch(saveUserInfo( {id:'qwer', name:'qqq' } ));
            console.log(action.payload.id);
            console.log(action.payload.name);

            let {id, name} = action.payload;

            return id;
        }
    }
})
//보유한 수행 함수들을 export

export let { saveUserId, clearUserId, saveUserInfo } = userSlice.actions;
//actions : 상태관리하는 변수(slice) 에 속해있는 상태변경 함수들이 모여있는 객체


//let bgSlice = createSlice({
//let nameSlice = createSlice({
//let adminSlice = createSlice({

//날씨 정보 저장
//let [weather, setWeather] = useState({weather:'sunny', temperature:5, hmdt: 40});

let weatherSlice = createSlice({
    name : 'weather',
    initialState : {
        weather:'sunny',
        temperature:5,
        hmdt: 40
    },
    reducers : {
        setWeatherInfo(state, action){  //dispatch(setWeatherInfo({weather:..., tep..., hd:...}))
            //let winfo = action.payload;
            //winfo.weather
            //winfo.temperature
            //winfo.hmdt
            let { weather, temperature, hmdt } = action.payload;

            // state 가 객체 타입인 경우에는 
            // 어떤 값을 return 해서 저장하지 않고, 그냥 해당 변수값을 바로 저장/변경해도 적용이 가능
            state.temperature = temperature;
            state.hmdt = hmdt;
            state.weather = action.payload.weather;
        }
    }
})

export let {setWeatherInfo} = weatherSlice.actions;

let companySlice = createSlice({
    name : "company",
    initialState : {
        name :'sunnycom',
        address : '서울특별시 강남구',
        tel : '02-123-4567'
    },
    reducers : {
        changeTel(state, action) {
            // dispatch(changeTel('02-111-2222'))
            state.tel = action.payload; 

            // dispatch(changeTel( { tel:'02-111-2222' } ))
            state.tel = action.payload.tel; 
        }
    }
})

export let {changeTel} = companySlice.actions;


// store 설정
// store 리덕스 기준 전체 데이터 저장하는 객체 (저장소)
export default configureStore({
    reducer: {
        user : userSlice.reducer,
        weather : weatherSlice.reducer,
        company : companySlice.reducer
    }
})


/*
    - Store: 상태 저장소
    - State: 실제 저장된 데이터
    - Action: "무슨 일 일어났다"는 객체
    - Payload: Action에 담긴 실제 값
    - Reducer: 상태 변경 규칙 함수
    - Dispatch: Action을 Store에 전달하는 함수
    - useSelector: 상태 읽기
    - useDispatch: Action 보내기
    - createSlice: Reducer + Action 합쳐서 만드는 도구
    - configureStore: Store 쉽게 만드는 함수
*/