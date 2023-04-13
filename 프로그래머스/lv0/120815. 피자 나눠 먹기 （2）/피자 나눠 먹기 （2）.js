function solution(n) {
    // 6조각의 피자 조각을 n명이 먹는다.
    // 단, 모두 같은수의 피자 조각을 먹어야함
    // 출력 : 최소 피자 판 수
    // 6과 n의 최소공배수를 구하자
    let pizza = 1;
    while(true) {
        if((pizza % 6 === 0) && (pizza % n === 0))break;
           pizza ++;
    }
        return pizza / 6;
}