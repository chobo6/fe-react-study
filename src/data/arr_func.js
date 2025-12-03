
console.log('javascript arr 관련 함수');

// 기본 배열
let arr = [10, 20, 30, 40];

// js 유용한 함수

// 1) map

arr.map(()=>{   // arr의 요소들 접근 반복실행하면서 return 가능
    console.log('arr map');
})

arr.forEach((v)=>{   // arr만큼 반복문 수행
    console.log('forEach ' + v);
})

arr.map((item)=>{   // 매개변수 1개     item 배열의 값 주입 반복
    console.log('arr map ' + item);
})

arr.map((item, index)=>{   // 매개변수 2개  item 배열값 index 인덱스값 주입 반복
    console.log('arr map ' + item + ' index : ' + index);
})

let result1 = arr.map(()=>{
    return 99;
})
console.log(result1);

let result2 = arr.map((item)=>{
    console.log(item);
})
console.log(result2); // [ undefined, undefined, undefined, undefined ]

let result3 = arr.map((item)=>{
    return item + 100;
})
console.log(result3);

let result4 = arr.map((item)=>{
    return '가지고 있는 값 : ' + item;
})
console.log(result4);

let menuArr = ['우동', '라면', '김밥'];
let result5 = menuArr.map((menu)=>{
    return '<p>' + menu + '<p>';
})
console.log(result5);

                        // ()=> {return data;}
                        // ()=> data
let result6 = menuArr.map((menu)=>'<p>' + menu + '<p>')
console.log(result6);

// 2) filter

arr = [10, 20, 30, 40];
// 실행 결과가 참(true) 결과만 return

let result7 = arr.filter(()=>{
    return true;
})
console.log(result7);

let result8 = arr.filter((value)=>{
    return value > 10;
})
console.log(result8);

let result9 = arr.filter((value)=>{
    return value != 30;
    // return value == 30;
})
console.log(result9);

// 3) find
let result10 = arr.find((value)=>{  // 못찾으면 undefined
    return value == 20;
})
console.log(result10);

// 4) findIndex
let result11 = arr.findIndex((value)=>{ // 못찾으면 -1
    return value == 20;
})
console.log(result11);

// return
// 구조분해할당
let arr2 = [10, 20, 30];
console.log(arr2[2]);

let [n1, n2, n3] = [77, 88, 99];
console.log(n1, n2, n3);

let [num, setNum] = [77, 88];

let obj = {
    num1: 30,
    num2: 50
}

let obj2 = obj;
console.log(obj2.num1);

let {num1, num2} = obj;
console.log(num1, num2);