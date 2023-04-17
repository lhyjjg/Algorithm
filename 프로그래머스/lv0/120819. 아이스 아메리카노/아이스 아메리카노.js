function solution(money) {
    let cup = Math.floor(money / 5500);
    let smallChange = money % 5500;
    return [cup, smallChange];
}