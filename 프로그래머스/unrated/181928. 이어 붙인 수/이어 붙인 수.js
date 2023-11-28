function solution(num_list) {
    let oddNumber = num_list.filter((n) => n % 2 === 1).join('');
    let evenNumber = num_list.filter((n) => n % 2 === 0).join('');
    return Number(oddNumber) + Number(evenNumber);
}