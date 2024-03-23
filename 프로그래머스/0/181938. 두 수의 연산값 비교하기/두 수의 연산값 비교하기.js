function solution(a, b) {
    return Number([a, b].join('')) > (2 * a * b) ? Number([a, b].join('')) : (2 * a * b);
}