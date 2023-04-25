function solution(num_list) {
  // 짝수의 개수를 구한다.
  let evenNum = num_list.filter(num => num % 2 === 0).length;
  // 홀수의 개수를 구한다.
  let oddNum = num_list.filter(num => num % 2 === 1).length;
  // 짝수와 홀수의 개수를 배열에 담아 리턴한다.
  return [evenNum, oddNum];
}