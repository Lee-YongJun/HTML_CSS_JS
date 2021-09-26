//2.숫자 입력 받아서 홀수 입력되면 55 더한결과 출력
//짝수 입력되면 77을 더한 결과를 출력하는 프로그램
let input = eval(prompt('숫자를 입력하세요'));

if (input % 2 === 1) {
    input += 55;
} else {
    input += 77;
}
document.write("답 : " + input);