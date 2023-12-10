function solution(a, b) {
    return Number([a, b].join('')) > Number([b, a].join('')) ? Number([a, b].join('')) : Number([b, a].join(''));
}