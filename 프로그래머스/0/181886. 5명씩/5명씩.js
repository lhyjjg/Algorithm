function solution(names) {
    return names.filter((name, index) => index % 5 === 0);
}