function solution(myString, pat) {
    return [...myString].map((s) => s === "A" ? "B" : "A").join('').includes(pat) ? 1 : 0;
}