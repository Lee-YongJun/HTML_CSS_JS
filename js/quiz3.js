//  4.함수만들기 -line 함수는 선 그려주는 함수(리턴타입 아님)
// -doubleFunc 함수는 매개변수 받아서 2배 곱한 결과 리턴하는 함수 만들기 
function line() {
    document.write("--------------------------------------");
}

line();

function doubleFunc(x) {
    return x * 2;
}

document.write(doubleFunc(10));