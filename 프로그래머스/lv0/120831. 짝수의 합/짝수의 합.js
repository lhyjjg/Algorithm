function solution(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        i % 2 === 0 ? sum += i : null
    }
    return sum
}