function solution(my_string) {
    const answer = my_string
          .replace(/[^0-9]/g,'')
          .split('')
          .map(v=>Number(v))
          .reduce((acc,val)=>acc+val)
    return answer 
}