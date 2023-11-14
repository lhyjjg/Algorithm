function solution(num, k) {
    let str = num.toString();
    return str.indexOf(k) >= 0 ? str.indexOf(k) + 1 : -1;
}