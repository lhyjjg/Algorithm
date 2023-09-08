function solution(absolutes, signs) {
    var answer = 0;
    for(i=0;i<absolutes.length;i++) {
        answer += absolutes[i] * (signs[i] ? 1 : -1);
    }

    return answer;
}