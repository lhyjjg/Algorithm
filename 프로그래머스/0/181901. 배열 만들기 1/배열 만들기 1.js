function solution(n, k) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        i % k === 0 ? answer.push(i) : '';
    }
    return answer;
}
