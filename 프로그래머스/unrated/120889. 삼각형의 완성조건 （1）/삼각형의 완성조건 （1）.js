function solution(sides) {
    let sort = sides.sort((a, b) => b - a)
    return sort[1] + sort[2] > sort[0] ? 1 : 2;
}