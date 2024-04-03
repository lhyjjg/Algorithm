function solution(s) {
    let numArr = s.split(" ").map((s) => Number(s)).sort((a, b) => a - b);
    return `${numArr[0]} ${numArr[numArr.length-1]}`;
}