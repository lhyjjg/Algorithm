function solution(age) {
  // a~j(0~9) 까지 object 만들기
  const obj = {
      '0':'a',
      '1':'b',
      '2':'c',
      '3':'d',
      '4':'e',
      '5':'f',
      '6':'g',
      '7':'h',
      '8':'i',
      '9':'j',
  }
  // age를 문자로 변환하고 자른 다음 배열로 만들어주고
  const ageArray = String(age).split('');
  // 반복문으로 각 키와 값 출력
  const result = [];
  for (let i = 0; i < ageArray.length; i++) {
    result.push(obj[ageArray[i]]);
  }
  return result.join('')
}