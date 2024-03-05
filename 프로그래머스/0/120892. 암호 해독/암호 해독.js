function solution(cipher, code) {
    let arr = [...cipher]
    let result = [];
    for (let i = 0; i <= arr.length; i++) {
        i % code === 0 ? result.push(arr[i-1]) : "";
    }
    return result.join('');
}