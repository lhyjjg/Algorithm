function solution(my_string, s, e) {
    let startStr = my_string.slice(0, s)
    let midStr = my_string.slice(s, e + 1).split("").reverse().join("")
    let endStr = my_string.slice(e + 1);
    return startStr.concat(midStr).concat(endStr);
}