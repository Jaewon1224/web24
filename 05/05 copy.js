let x = 10; // 변수 x를 10으로 초기화
console.log("x1=",x); // x의 값을 출력
// var x = 10;
console.log("x2=",x); // x의 값을 다시 출력


/* 반복문 */
let arr = [10, 20, 30]; // 배열 초기화

console.log(arr[0]) // 배열 첫 번째 요소 출력
console.log(arr[1]) // 배열 두 번째 요소 출력
console.log(arr[2]) // 배열 세 번째 요소 출력

// 전통적인 반복문
console.log('** 전통적인 반복문 **') ;
for(let i=0;i<arr.length;i++) {
    console.log(arr[i]);
}

//for ... in
console.log('** for in 반복문 **') ;
for(let i in arr) {
    console.log(arr[i]);
}

//foreach
console.log('** foreach 반복문 **') ;
arr.forEach((item, i) => {console.log(`${i} => ${item}`)})

//for .. of
console.log('** for of 반복문 **') ;
for(let i of arr) {
    console.log(i);
}

for(let [i, item] of arr.entries()){
    console.log(`${i} => ${item}`) // for ... of 문과 entries 메서드를 이용한 출력
}

document.addEventListener('DOMContentLoaded', ()=>{
    const msg = document.querySelector('#msg'); // msg 요소 선택

    msg.innerHTML = '<h1 style="color:blue;">메시지영역</h1>' // HTML 내용을 설정
    //msg.innerText = '<h1 style="color:blue;">메시지영역</h1>'
    //msg.textContent = '<h1 style="color:blue;">메시지영역</h1>'
})