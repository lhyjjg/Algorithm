function solution(hp) {
    let first = hp % 5
    let second = first % 3
    let third = second / 1
  
    return first === 0 ? hp / 5 :
           second === 0 ? Math.floor(hp / 5) + (first /3) :
           Math.floor(hp / 5) + Math.floor(first /3) + (third)
}