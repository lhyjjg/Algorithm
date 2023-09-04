function solution(phone_number) {
    return phone_number.split("")
        .fill('*', 0, phone_number.length - 4)
        .join('');
}