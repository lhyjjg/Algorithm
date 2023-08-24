function solution(n) {
    var array = Array.from(String(n));
    let result = array.sort(function(a, b){
	return b - a;
    });
    return Number(result.reduce((a, b) => `${a}${b}`))
}