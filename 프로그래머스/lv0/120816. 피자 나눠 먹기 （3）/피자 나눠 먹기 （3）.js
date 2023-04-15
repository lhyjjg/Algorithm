function solution(slice, n) {
  // slice = 2이상 10이하의 피자 조각 수
  // n = 피자 먹는 사람의 수
  // 출력 : n명의 사람이 최소 1조각 이상을 먹을 때, 최소 피자 판수
  // silce(조각수)와 n(사람수)과 0으로 나누어 떨어지면 silce/n 리턴(피자판수)
  if (n % slice === 0) {
      return n / slice
  // 나누어 떨어지지 않으면, 최소 1조각 이상 먹어야하니 피자 한판 더 해주기
  }else if (n % slice > 0) {
      return Math.floor(n / slice) + 1

  }
}