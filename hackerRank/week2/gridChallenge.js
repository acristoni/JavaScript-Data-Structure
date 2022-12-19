const grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']

function gridChallenge(grid) {
    let Grid = grid
    let gridColumns = []
    
    //get a row and sort all rows
    for(let i = 0; i < Grid.length; i++) {
        let rowArray = Grid[i].split('')
        Grid[i] = rowArray.sort()
    }

    //create empty arrays for each collumn
    for(const collumn of Grid[0]) {
        gridColumns.push([])
    }
    
    //get 1 element by row for each index to take a column
    for(const row of Grid) {
        for(let i = 0; i < row.length; i++) {
            gridColumns[i].push(row[i])
        }
    }

    //check if collunm is sorted
    for(const collumn of gridColumns) {
        if (JSON.stringify(collumn) !== JSON.stringify(collumn.sort())) {
            return 'NO'
        }
    }

    return 'YES'
}

console.log(gridChallenge(grid))