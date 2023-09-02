function solution(arr) {
    return arr.length === 1 ? [-1] : arr.filter((num) => num !== Math.min(...arr));
}