function solution(array) {
    let max = Math.max.apply(null, array);
    let index = array.indexOf(max);
    return [max, index]
}