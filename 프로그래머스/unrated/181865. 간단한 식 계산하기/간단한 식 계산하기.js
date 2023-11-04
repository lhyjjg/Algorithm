function solution(binomial) {
    let a = Number(binomial.split(" ")[0]);
  let b = Number(binomial.split(" ")[2]);
  let op = binomial.split(" ")[1];

  return op === "+" ? a + b :
         op === "-" ? a - b :
         op === "*" ? a * b : 0;
}