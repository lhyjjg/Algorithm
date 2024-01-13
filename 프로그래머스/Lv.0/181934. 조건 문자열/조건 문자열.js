function solution(ineq, eq, n, m) {
    if(ineq === "<" && eq === "=" && n <= m) return 1
    if(ineq === ">" && eq === "=" && n >= m) return 1
    if(ineq === "<" && n < m) return 1
    if(ineq === ">" && n > m) return 1
    return 0
}