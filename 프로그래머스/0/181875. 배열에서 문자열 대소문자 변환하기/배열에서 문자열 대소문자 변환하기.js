function solution(strArr) {
    for(let i = 0 ; i < strArr.length ; i ++) {
        if(!Number.isNaN(Number(strArr[i]))) continue
        strArr[i] = i%2 === 0 ? strArr[i].toLowerCase() : strArr[i].toUpperCase()
    }
    return strArr
}