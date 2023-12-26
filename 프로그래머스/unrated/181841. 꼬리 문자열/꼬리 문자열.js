function solution(str_list, ex) {
    let regex = new RegExp(ex);
    return str_list.filter((str) => regex.test(str) === false).join('');
}