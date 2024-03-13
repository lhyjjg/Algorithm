function solution(my_string, is_suffix) {
    const answer = my_string.indexOf(is_suffix, my_string.length - is_suffix.length);
    return answer === -1 ? 0 : 1;
}