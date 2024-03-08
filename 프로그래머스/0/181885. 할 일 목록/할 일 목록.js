function solution(todo_list, finished) {
    return todo_list.filter((item, index) => !finished[index]);
}