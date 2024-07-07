// 1. DOM 생성이 되면 Img, button 요소를 가져오기
// 2. button 클릭이 되는 경우를 찾아야 함
// 3. img src 속성을 변경
//     - 랜덤수를 발생 -> 해당하는 랜덤수의 이미지를 가져오기

// 1. DOM 생성이 되면
document.addEventListener('DOMContentLoaded',()=>{
    //Img, button 요소를 가져오기
    const img = document.querySelector('#divContent img') // 이미지 요소를 가져옴
    const bt = document.querySelector('#divContent button') // 버튼 요소를 가져옴

    // 2. button 클릭이 되는 경우를 찾아야 함
    bt.addEventListener('click',()=>{
        //랜덤수를 발생
        const n = Math.floor(Math.random()*6)+1; // 랜덤 주사위 숫자 생성
        console.log(`${n}.png`);

        // 3. img src 속성을 변경
        img.setAttribute('src',`./img/${n}.png`); // 이미지 src 속성 변경
    });
});