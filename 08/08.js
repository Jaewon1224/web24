document.addEventListener('DOMContentLoaded',()=>{
    //Dom 요소 가져오기
    const txt1 = document.querySelector('#txt1'); // 텍스트 입력 상자 선택
    const btAdds = document.querySelectorAll('.btAdd');; // 추가 버튼 선택
    const btDels = document.querySelectorAll('.btDel'); // 삭제 버튼 선택
    const btChanges = document.querySelectorAll('.btChange'); // 변경 버튼 선택

    //배열 만들기
    let arr = []; // 배열 초기화

    //오브젝트 만들기
    let obj = {
        '사과' : '🍎', 
        '바나나' : '🍌', 
        '오렌지' : '🍊', 
        '수박' : '🍉',
        '오이' : '🥒',
        '당근' : '🥕',
        '가지' : '🍆',
        '브로콜리' : '🥦',
    }

    //추가버튼
    for(let bt of btAdds) { // 추가 버튼 클릭 이벤트 처리
        bt.addEventListener('click',()=>{
            console.log(bt.textContent);  // 버튼 텍스트 출력

            // if (bt.textContent == '사과') {
            //     arr.push('🍎')
            // }
            // else if (bt.textContent == '바나나') {
            //     arr.push('🍌')
            // }
            // else if (bt.textContent == '오렌지') {
            //     arr.push('🍊')
            // }
            // else if (bt.textContent == '수박') {
            //     arr.push('🍉')
            // }
            // console.log(arr)

            arr.push(obj[bt.textContent]); // if 문장을 한 줄로 해결 가능(오브젝트 만들어야 함)

            txt1.value = arr.join(' '); // 배열 요소를 문자열로 변환하여 텍스트 상자에 표시
        });
    }

    //삭제버튼
    for(let bt of btDels) { // 삭제 버튼 클릭 이벤트 처리
        bt.addEventListener('click', ()=>{

            const btkey = bt.textContent.replace('삭제',''); // '삭제' 텍스트 제거
            console.log(btkey) // 삭제할 과일 또는 채소 출력

            // arr = arr.filter((item)=>{return item != obj[btkey]});
            arr = arr.filter(item => item != obj[btkey]); // 위 코드와 같은 코드. 이 코드를 더 많이 사용함
            
            txt1.value = arr.join(' ') // 배열 요소를 문자열로 변환하여 텍스트 상자에 표시
        })
    }

    //변경버튼
    for(let bt of btChanges) { // 변경 버튼 클릭 이벤트 처리
        bt.addEventListener('click', ()=>{
            const w1 = bt.textContent.split('→')[0] ; // 변경 전 과일 또는 채소
            const w2 = bt.textContent.split('→')[1] ; // 변경 후 과일 또는 채소
            console.log(w1, w2) // 변경 전후 과일 또는 채소 출력

            // arr = arr.map((item)=>{return item == obj[w1] ? obj[w2] : item});
            arr = arr.map(item => item == obj[w1] ? obj[w2] : item); // 배열에서 해당 과일 또는 채소 변경
            txt1.value = arr.join(' ') // 배열 요소를 문자열로 변환하여 텍스트 상자에 표시
        })
    }
})