  function solution(a, b) {
    // a부터 b까지의 수를 배열로 구한다.
    // 배열의 모든 요소를 더한다.
    let answer = [];
    if (a <= b) {
        for (let i = a; i <= b; i++) {
            answer.push(i);
        }
    }else if (a >= b) {
        for (let i = b; i <=a; i++) {
            answer.push(i);
        }
    } 
    return answer.reduce((a, b) => a + b, 0);
}