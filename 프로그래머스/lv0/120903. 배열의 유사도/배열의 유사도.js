function solution(s1, s2) {
    let answer = s1.filter((el)=> s2.includes(el)).length
    return answer;
}