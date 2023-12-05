function solution(numbers, n) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (sum > n) {
            return sum ;
        } else sum += numbers[i];
    } 
    return sum;
}