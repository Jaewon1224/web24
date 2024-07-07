/*
업다운 게임
1. DOM 요소 가져오기
2. 확인 버튼 처리
 - 확인 버튼 내용이 '확인'이 아니면 초기화
 - 랜덤수 생성 (초기화되기 전까지 한번만 생성) => flag 변수
 - 텍스트박스의 숫자와 비교: 크면 -> 다운, 같으면 -> 성공, 작으면 -> 업
 - 비교후 이미지 변경

3. 성공하면
 - 텍스트 박스를 숨김
 - 버튼의 글자를 변경

4. 초기화
 - 이미지는 what
 - 텍스트 상자가 보이게
 - 버튼의 이름을 확인으로
 - 랜덤 변수가 생성될 수 있도록 => flag 변수
 */

 document.addEventListener('DOMContentLoaded',()=>{
     //1. Dom 요소 가져오기
     const img = document.querySelector('img'); //태그 selector
     const txt1 = document.querySelector('input[type=number]') ; //속성 selector
     const btok = document.querySelector('#btok') // id selector
     const btcancel = document.querySelector('button[type=reset]');

     //랜덤수 생성 제어 변수
     let flag = true ; // true이면 랜덤수 생성가능, false이면 랜덤수 생성불가

     //랜덤수
     let n=0;

    //초기화 함수
    //  - 이미지는 what
    //  - 텍스트 상자가 보이게
    //  - 버튼의 이름을 확인으로
    //  - 랜덤 변수가 생성될 수 있도록 => flag 변수
     const init = () => {
        img.setAttribute('scr', './img/what.png'); // 이미지를 기본 이미지로 설정
        txt1.value = ''; // 입력 상자 초기화
        txt1.style.display='inline'; // 입력 상자 보이기
        btok.textContent = '확인'; // 버튼 텍스트 초기화
        btcancel.style.display='inline'; // 취소 버튼 보이기
        flag = true; // 랜덤수 생성 가능 상태로 설정
     }

     //2. 확인 버튼 처리
     btok.addEventListener('click',(e)=>{ // 확인 버튼 클릭 이벤트 처리
        e.preventDefault(); // 기본 동작 방지

        //확인버튼이 아닌 경우
        if(btok.textContent != '확인'){ // 버튼 텍스트가 '확인'이 아닌 경우
            init(); //초기화함수 호출
            return;
        }
        
        
        //랜덤수 생성 (초기화되기 전까지 한번만 생성) => flag 변수
        if(flag){
        n = Math.floor(Math.random()*100)+1; //1~100까지 랜덤수 생성
        console.log(n); // 생성된 랜덤수 출력
        flag = false; // 랜덤수 생성 불가능 상태로 설정
        }

        //숫자 입력 확인
        if(txt1.value == '') { // 입력 상자가 비어 있는 경우
            alert('숫자를 입력하세요.'); // 경고 메시지 출력
            txt1.focus(); // 입력 상자에 포커스 설정
            return ;
        }

        //비교
        let usern = parseInt(txt1.value) ; //사용자입력수 // 사용자 입력 값 정수로 변환
        if(n > usern){//up
            img.setAttribute('src', './img/up.png'); // 업 이미지 설정
        }
        else if(n < usern){//down
            img.setAttribute('src', './img/down.png'); // 다운 이미지 설정
        }
        else{//성공
            img.setAttribute('src', './img/good.png'); // 성공 이미지 설정
            txt1.style.display ='none'; // 입력 상자 숨기기
            btok.textContent = '번호를 다시 생성하세요.' ; // 버튼 텍스트 변경
            btcancel.style.display ='none'; // 취소 버튼 숨기기

        }
    });
 });