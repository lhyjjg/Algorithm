function solution(n) {
    // 시간 복잡도 줄이기
  let count = 0;
  let limit = Math.floor(Math.sqrt(n));
  let memo = new Set(); // memoization을 위한 Set
  
  for (let i = 1; i <= limit; i++) {
    if (n % i === 0) {
      if (!memo.has(i)) { // memoization 체크
      memo.add(i);
      count++;
      }
    let j = n / i;
    if (i !== j && !memo.has(j)) { // memoization 체크
      memo.add(j);
      count++;
      }
    }
  }
  return count;
}