function solution(order) {
    let str = order.toString();
    let clap = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '0' && str[i] % 3 === 0) {
            clap += 1
        }
    } return clap
}