var islandPerimeter = function(grid) {
    let row = grid.length
    let col = grid[0].length
    let land =0
    let border = 0
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(grid[i][j]==1){
                land++
                if(i>0&&grid[i-1][j]==1){
                    border++
                    console.log('1111')
                }
                if(j>0&&grid[i][j-1]==1){
                    border++
                    console.log('2222')
                }
            }
        }
    }
    return land*4-border*2
};