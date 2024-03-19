function solution(my_string, indices) {
    return [...my_string].filter((str, strIdx) => !indices.includes(strIdx)).join("");
}