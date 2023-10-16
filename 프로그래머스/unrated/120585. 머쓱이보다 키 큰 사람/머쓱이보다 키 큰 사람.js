function solution(array, height) {
    return array.filter(num => height < num).length; 
}