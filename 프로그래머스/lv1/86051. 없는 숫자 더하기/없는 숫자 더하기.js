function solution(numbers) {
    let sum = 45;
    return sum - (numbers.reduce((a, b) => a + b))
}