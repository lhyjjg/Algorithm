function solution(myString) {
    return [...myString].map((s) => s < 'l' ? 'l' : s).join('');
}