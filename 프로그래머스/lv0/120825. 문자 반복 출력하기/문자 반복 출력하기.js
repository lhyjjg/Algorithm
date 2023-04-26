function solution(my_string, n) {
  // 문자열의 각 문자를 추출한다.
  let result = "";
  for(let str of my_string) {
    // 각 문자를 n만큼 출력한다.
    for(let i = 0; i < n; i++) {
      result += str;
    }
  }
  return result
}