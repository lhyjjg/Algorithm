function solution(array, commands) {
    let result = [];
    for (let indx = 0; indx < commands.length; indx++) {
        let slice = array.slice(commands[indx][0] - 1, commands[indx][1]);
        let sort = slice.sort((a, b) => a - b);
        
        result.push(sort[commands[indx][2] - 1]);
    }
    return result;
}