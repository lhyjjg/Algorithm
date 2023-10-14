function solution(numbers) {
    let sort = numbers.sort((a, b) => b - a);
    return sort[0] * sort[1];
}