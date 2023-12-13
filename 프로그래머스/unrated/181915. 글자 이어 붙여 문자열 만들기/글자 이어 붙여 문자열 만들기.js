function solution(my_string, index_list) {
    let result = '';
    for (let indx = 0; indx < index_list.length; indx++) {
        result += my_string[index_list[indx]];
    }
    return result;
}