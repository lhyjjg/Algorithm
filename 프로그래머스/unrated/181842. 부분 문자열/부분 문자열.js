function solution(str1, str2) {
    let regex = new RegExp(str1);
    return regex.test(str2) ? 1 : 0;
}