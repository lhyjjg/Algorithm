function solution(s) {
    let array = s.split(' ');
    let result ="";
    let answer = [];

    array.forEach(function(item){
        for(let i = 0; i<item.length; i++){
            if(i % 2 === 0){
                result += item[i].toUpperCase()
            }else{
                result += item[i].toLowerCase()
            }
        }
        answer.push(result);
        result = "";
    })
    return answer.join([" "]);
}