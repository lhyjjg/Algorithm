function solution(n, k) {
    // 양꼬치 가격 + 음료수 가격 - 서비스 음료수 (양꼬치 10인분 음료수 하나)
    return (n * 12000) + (k * 2000) - (Math.floor (n / 10) * 2000)
}