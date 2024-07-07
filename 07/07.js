document.addEventListener('DOMContentLoaded', () => {
    //DOM요소 가져오기
    const txt1 = document.querySelector('#txt1'); // 첫 번째 입력 상자 선택
    const txt2 = document.querySelector('#txt2'); // 두 번째 입력 상자 선택

    const bt1 = document.querySelector('#bt1'); // 회문 확인 버튼 선택
    const bt2 = document.querySelector('#bt2'); // 숫자 합계 버튼 선택

    //회문 확인
    bt1.addEventListener('click', (e) => { // 회문 확인 버튼 클릭 이벤트 처리
        e.preventDefault(); // 기본 동작 방지

        if (txt1.value == ' ') return; // 입력 값이 공백인 경우 리턴

        console.log(txt1.value);                // 입력 값 출력
        console.log(txt1.value.length);         // 입력 값의 길이 출력
        console.log(txt1.value[1]);             // 입력 값의 두 번째 문자 출력
        console.log(txt1.value.charAt(0));      // 입력 값의 첫 번째 문자 출력
        for (let c of txt1.value) { // 입력 값을 하나씩 출력
            console.log(c)
        }

        let tm = '';
        for (let i = txt1.value.length - 1; i >= 0; i--) { // 입력 값을 뒤집기
            tm = tm + txt1.value[i];
        }

        console.log(tm); // 뒤집힌 값 출력

        // 문자열 변경 => 공백 제거로
        let txt = txt1.value.replaceAll(' ', ''); // 입력 값의 공백 제거

        tm = txt.split('').reverse().join('') // 뒤집힌 값 재생성
        console.log(tm); // 뒤집힌 값 출력


        if (txt == tm) { // 입력 값과 뒤집힌 값이 같은지 확인
            txt2.value = '회문입니다.'; // 같으면 회문임을 표시
        }
        else {
            txt2.value = '회문이 아닙니다.'; // 다르면 회문이 아님을 표시
        }
    })

    //숫자 합계
    bt2.addEventListener('click', (e) => { // 숫자 합계 버튼 클릭 이벤트 처리
        e.preventDefault(); // 기본 동작 방지

        if (txt1.value == '') { // 입력 값이 비어 있는 경우
            alert('글자를 입력하세요.'); // 경고 메시지 출력
            txt1.focus(); // 입력 상자에 포커스 설정
            return;
        }

        let sum = 0;
        for (let c of txt1.value) {
            if (!isNaN(c)) { //숫자인지 확인: 숫자이면 isNaN() 결과는 false
                sum = sum + parseInt(c); // 숫자이면 합계에 더함
            }
        }

        txt2.value = sum; // 합계 값을 두 번째 입력 상자에 표시
    })
});