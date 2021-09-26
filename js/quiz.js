//1.구구단 전체단 출력 프로그램
for (let i = 2; i <= 9; i++) {
    document.write(`<h1>${i}단</h1>`);
    for (let j = 1; j <= 9; j++) {
        document.write(`${i}   *   ${j}   =  ${i*j} <br/>`);
    }
}


