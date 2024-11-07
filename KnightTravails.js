
function knightMoves(start, end) {

    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2] 
    ];

    function isValidPosition(position) {
        if(!Array.isArray(position) || position.length !== 2){
            throw new Error('The argument must be an array of two coordinates like: "[x, y]"');
        }
        const [x, y] = position;
        if (x >= 0 && y >= 0 && x < 8 && y < 8){
            return true;
        } else{
            return false;
        }
    };

    let queue = [[start, [start]]];
    let visited = new Set();
    visited.add(start.toString());

    while(queue.length > 0){
        let [currentPosition, currentPath] = queue.shift();
        if(currentPosition.toString() === end.toString()){
            const movesCount = currentPath.length - 1;
            console.log(`You've made it in ${movesCount} moves! Here's your path:`);
            currentPath.forEach(position => console.log(position));
            return currentPath;
        }
        for(let move of moves){
            let newPosition = [
                currentPosition[0] + move[0],
                currentPosition[1] + move[1]
            ];

            if(isValidPosition(newPosition) && !visited.has(newPosition.toString())){
                visited.add(newPosition.toString());
                queue.push([newPosition, [...currentPath, newPosition]]);
            }
        }
    }
    console.log('No path found');
    return null;
}

module.exports = knightMoves;
