function solution(numbers) {
    let sortedNumbers = numbers.sort((a, b) => b - a);
    let maxProduct = sortedNumbers[0] * sortedNumbers[1];
    let minProduct = sortedNumbers[sortedNumbers.length - 1] * sortedNumbers[sortedNumbers.length - 2];
        return Math.max(maxProduct, minProduct);
}