// 사용자와 컴퓨터 랜덤수 생성

// 1. DOM 생성이 되면 Img, button 요소를 가져오기
// 2. button 클릭이 되는 경우를 찾아야 함
// 3. img src 속성을 변경
//     - 랜덤수를 발생 -> 해당하는 랜덤수의 이미지를 가져오기

// 1. DOM 생성이 되면
document.addEventListener('DOMContentLoaded',()=>{
    //Img, button 요소를 가져오기
    const imgCom = document.querySelector('#com') // 컴퓨터 주사위 이미지를 가져옴
    const imgUser = document.querySelector('#user') // 사용자 주사위 이미지를 가져옴
    const bts = document.querySelectorAll('#divContent button') // 버튼 요소들을 가져옴
    const msg = document.querySelector('#msg') // 메시지 표시 요소를 가져옴
    console.log(bts);

    // 2. button 클릭이 되는 경우를 찾아야 함
    for(let bt of bts){
        bt.addEventListener('click',()=>{
            //랜덤수를 발생 1~6까지
            const nCom = Math.floor(Math.random()*6)+1; // 컴퓨터의 랜덤 주사위 숫자 생성
    
            //User 숫자 :문자를 숫자로 변환
            const nUser = parseInt(bt.textContent.charAt(0)); // 사용자가 선택한 숫자 가져오기
            console.log('nUser', nUser)
    
            // 3. img src 속성을 변경
            imgCom.setAttribute('src',`./img/${nCom}.png`); // 컴퓨터 주사위 이미지 변경
            imgUser.setAttribute('src',`./img/${nUser}.png`); // 사용자 주사위 이미지 변경

            //4. 숫자비교
            if (nCom === nUser) {
                msg.innerHTML = '<h1 id="msgRed">맞음</h1>' // 맞춘 경우 메시지 표시
            }
            else {
                msg.innerHTML = '<h1 id="msgBlue">틀림</h1>' // 틀린 경우 메시지 표시
            }
        });
    }
});