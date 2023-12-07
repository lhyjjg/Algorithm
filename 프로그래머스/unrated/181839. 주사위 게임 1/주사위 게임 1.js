function solution(a, b) {
    return (a % 2 === 1 && b % 2 === 1) ? a ** 2 + b ** 2
         : (a % 2=== 1 || b % 2 === 1) ? 2 * (a + b) : Math.abs(a - b);
}