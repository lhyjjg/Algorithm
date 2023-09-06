function solution(price, money, count) {
    let answer
    if(count % 2 === 0){
       const startPrice = price
       const endPrice = price * count

       const pay = (startPrice + endPrice) * (count / 2)
       answer = pay - money
    }   
    else{
       const startPrice = price
       const endPrice = price * count

       const pay = (startPrice + endPrice) * Math.floor(count / 2) + (endPrice+startPrice) / 2
       answer = pay - money
    }

    return answer > 0 ? answer : 0
}