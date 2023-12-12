function solution(num_list, n) {
    let result = [];
    for (let i = n; i < n + num_list.length; i++) {
        let index = i % num_list.length;
        result.push(num_list[index]);
    }
    return result;
}