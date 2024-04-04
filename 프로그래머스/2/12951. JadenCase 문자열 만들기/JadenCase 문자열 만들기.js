function solution(s) {
    let answer = '';
    s = s.toLowerCase();
    s = s.split(' ');
    for(let i=0; i<s.length; i++) {
        s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);
        answer += s[i];    
        answer += ' ';
    }
    answer = answer.slice(0, -1);
    return answer;
}