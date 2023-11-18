function solution(number) {
    return [...number].map((num) => Number(num)).reduce((acc, cur) => acc + cur) % 9;
}