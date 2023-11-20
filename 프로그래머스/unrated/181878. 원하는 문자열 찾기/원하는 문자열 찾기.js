function solution(myString, pat) {
    let reg = new RegExp(pat, 'gi');
    return reg.test(myString) ? 1 : 0;
}