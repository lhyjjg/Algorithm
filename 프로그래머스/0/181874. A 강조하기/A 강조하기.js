function solution(myString) {
    return [...myString].map((s) => s === "a" || s === "A" ? "A" : s.toLowerCase()).join("");
}