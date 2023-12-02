function solution(n) {
    let result = 0;
    if (n % 2 === 1) {
        for (let i = 1; i <= n; i++) {
            i % 2 === 1 ? result += i : 0;
        }
    } else for (let i = 1; i <= n; i++) {
        i % 2 === 0 ? result += Math.pow(i, 2) : 0;
    }
    return result;
}