function solution(num_list) {
    let multiply = num_list.reduce((acc, cur) => acc * cur);
    let sum = num_list.reduce((acc, cur) => acc + cur);
    return multiply < sum*sum ? 1 : 0;
}