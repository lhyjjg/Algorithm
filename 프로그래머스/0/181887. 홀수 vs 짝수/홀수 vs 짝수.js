function solution(num_list) {
    let even = 0;
    let odd = 0;
    
    num_list.map((n, i) => {
        !(i % 2) ? even += n : odd += n; 
    })
    
    return even > odd ? even : odd;
}