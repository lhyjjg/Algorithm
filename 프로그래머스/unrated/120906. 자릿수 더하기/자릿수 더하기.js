function solution(n) {
    return Array.from(String(n), (num) => Number(num)).reduce((a, b) => a + b);
}