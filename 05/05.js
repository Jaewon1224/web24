const convert = (sel1, sel2, lb1, lb2, txt1, txt2) => {
    if (sel1.value == '℃') { //섭씨온도 -> 화씨온도
        sel2.value = '℉' ;
        lb1.textContent = '℃' ;
        lb2.textContent = '℉' ;
;        }
    else { //화씨온도 -> 섭씨온도
        sel2.value = '℃' ;
        lb1.textContent = '℉' ;
        lb2.textContent = '℃' ;
        if(txt1.value != '') {
            txt2.value = (txt1.value - 32) * (5/9) ;
        }
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    //select box
    const sel1 = document.querySelector('#sel1'); // 첫 번째 선택 상자
    const sel2 = document.querySelector('#sel2'); // 두 번째 선택 상자

    //input
    const txt1 = document.querySelector('#txt1'); // 첫 번째 입력 상자
    const txt2 = document.querySelector('#txt2'); // 두 번째 입력 상자

    //label
    const lb1 = document.querySelector('#lb1'); // 첫 번째 라벨
    const lb2 = document.querySelector('#lb2'); // 두 번째 라벨

    sel1.addEventListener('change', ()=>{
        convert(sel1, sel2, lb1, lb2, txt1, txt2) ;
        if(txt1.value != '' && lb1.textContent == '℃') {
            txt2.value = (9/5) * txt1.value + 32 ; // 섭씨 -> 화씨
        }
        else if (txt1.value != '' && lb1.textContent == '℉'){
            txt2.value = (txt1.value - 32) * (5/9) ; // 화씨 -> 섭씨
        }
    })

    sel2.addEventListener('change', ()=>{
        convert(sel2, sel1, lb1, lb2, txt1, txt2) ;
        if(txt1.value != '' && lb1.textContent == '℃') {
            txt2.value = (9/5) * txt1.value + 32 ;
        }
        else if (txt1.value != '' && lb1.textContent == '℉'){
            txt2.value = (txt1.value - 32) * (5/9) ;
        }
    })
});