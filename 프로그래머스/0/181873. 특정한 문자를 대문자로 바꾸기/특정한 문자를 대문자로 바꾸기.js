function solution(my_string, alp) {
    return [...my_string].map((s) => s === alp ? s.toUpperCase() : s).join('');
}