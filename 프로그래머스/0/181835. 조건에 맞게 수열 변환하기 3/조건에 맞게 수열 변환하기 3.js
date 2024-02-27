function solution(arr, k) {
    return k % 2 === 1 ? arr.map((n) => n * k) : arr.map((n) => n + k);
}