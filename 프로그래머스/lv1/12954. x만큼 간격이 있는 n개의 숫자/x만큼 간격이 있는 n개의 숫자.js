function solution(x, n) {
    let arr = [];
    let result = 0;
    for (let i = 0; i <n; i++) {
        result += x;
        arr.push(result);
    }
    return arr;
}