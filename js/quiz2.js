//3. .blank 클래스명 있는 곳 지정해서 ul태그 밑에 li 태그 10개 동적 생성하기
//(:hover)가 되면 색상 변경되게 해주세요.
let ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i++) {
    let li = document.createElement('li');
    li.textContent = `list-${i+1}`;
    ulEl.appendChild(li);
}