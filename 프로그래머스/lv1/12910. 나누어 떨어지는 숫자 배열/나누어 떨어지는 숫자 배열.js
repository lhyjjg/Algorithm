function solution(arr, divisor) {
    const result = arr.filter((num) => num % divisor === 0).sort((a,b)=>a-b)
    return result.length === 0 ? [-1] : result
}