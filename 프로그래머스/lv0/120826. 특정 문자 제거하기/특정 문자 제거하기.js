function solution(my_string, letter) {
    // 정규표현식을 통해 letter의 값을 찾는다.
    // 찾은 값을 replace를 통해 비워서 리턴한다.
    return my_string.replace(new RegExp(letter, "g"),'');
}