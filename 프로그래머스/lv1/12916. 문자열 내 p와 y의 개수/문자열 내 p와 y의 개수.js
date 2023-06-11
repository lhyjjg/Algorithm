function solution(s){
    // p와 y를 찾는 정규표현식
    let regexrP = /p/ig;
    let regexrY = /y/ig;
    
    // s에 포함된 p, y의 개수
    let countP = s.match(regexrP) ? s.match(regexrP).length : 0;
    let countY = s.match(regexrY) ? s.match(regexrY).length : 0;
    
    return countP === countY || countP + countY < 1 ? true : false;
    
//     let countP = [...s].filter((spell) => spell === 'p').length;
//     let countY = [...s].filter((spell) => spell === 'y').length;
    
//     return countP === countY || countP + countY === 0 ? true : false;
}