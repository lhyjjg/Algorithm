function solution(x) {
    // 정수를 문자열로 바꾼다
    // 문자열을 배열로 바꾸고
    // 각 요소를 숫자로 변경해준 뒤
    // 전부 더 한다.
    // x가 더 값으로 나누어 떨어지면 true 아니라면 false
    let array = Array.from(String(x))
    let sum = array.map(Number).reduce((a,b) => a+b)
    return x % sum === 0 ? true : false
}