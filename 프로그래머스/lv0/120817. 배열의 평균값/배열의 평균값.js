function solution(numbers) {
    // 배열의 요소를 전부 더 해주고
    let sum = numbers.reduce((num1, num2) => num1 + num2)
    // 배열의 길이만큼 나눠주기 = 평균값
    return sum / numbers.length
}