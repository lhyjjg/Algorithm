function solution(start, end_num) {
    let result = [];
    for(let i = end_num; i <= start; i++) {
       result.unshift(i); 
    }
    return result;
}