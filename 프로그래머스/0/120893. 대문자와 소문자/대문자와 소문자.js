function solution(my_string) {
    return [...my_string].map((s) => s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()).join('');
}