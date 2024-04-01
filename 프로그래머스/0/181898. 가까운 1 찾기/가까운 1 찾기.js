function solution(arr, idx) {
    return arr.findIndex((result, index) => index >= idx && result === 1);
}