function solution(num) {
    let count = 0;
    function collatz(num) {
        if(num === 1) return count;
        count++;
        num % 2 === 0 ? collatz(num / 2) : collatz(num * 3 + 1);
    }
    collatz(num);
    return count >= 500 ? -1 : count;
}