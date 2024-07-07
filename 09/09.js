document.addEventListener('DOMContentLoaded', () => {
    //요소 가져오기

    const lotto = document.querySelector('#lotto'); // 로또 번호 출력 영역 선택
    const bt = document.querySelector('#bt') // 로또 번호 생성 버튼 선택

    // 예시 번호 숨기기
    const exampleNumbers = document.querySelector('#example-numbers');
    if (exampleNumbers) {
        exampleNumbers.style.display = 'none';
    }

    //로또 번호 저장
    let arr = [];

    bt.addEventListener('click', () => {
        //배열 초기화;
        arr = [];

        //로또 번호 생성
        while (arr.length < 7) { // 7개의 로또 번호 생성
            const n = Math.floor(Math.random() * 45) + 1; // 1~45 사이의 랜덤 숫자 생성

            if (!arr.includes(n)) arr.push(n); // 중복되지 않으면 배열에 추가
        }

        //로또 번호 정렬
        arr.sort((a, b) => a - b) // 로또 번호 정렬
        console.log(arr) // 생성된 로또 번호 출력

        let tm = arr.map(item => // 로또 번호를 span 태그로 변환
            `<span class="sp${Math.floor(item / 10)}">
                      ${item}
                    </span>`);

        // 필터 사용 기준(08.js):
        // 요소를 선택하거나 제외하고 싶을 때
        // 반환된 배열의 길이가 원래 배열의 길이보다 같거나 작아질 때
        // 특정 조건을 만족하는 요소들만 필요할 때

        // 맵 사용 기준(09.js):
        // 배열의 각 요소를 변환하여 새로운 값을 만들고 싶을 때
        // 반환된 배열의 길이가 원래 배열의 길이와 동일할 때
        // 기존 요소를 변경하지 않고 새로운 배열을 만들고 싶을 때

        //6번째 추가                
        tm.splice(6, 0, '<span id="spplus">+</span>') // 6번째 위치에 '+' 추가

        // 구문: array.splice(start, deleteCount, item1, item2, ...)
        // start: 변경을 시작할 인덱스(여기서는 6번째 위치)
        // deleteCount: 제거할 요소의 수(여기서는 0, 즉 아무것도 제거하지 않음)
        // item1, item2, ...: 배열에 추가할 요소(여기서는 '<span id="spplus">+</span>')

        lotto.innerHTML = tm.join(''); // 변환된 HTML을 로또 번호 출력 영역에 추가
    });
});

