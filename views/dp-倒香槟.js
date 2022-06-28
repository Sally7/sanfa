var champagneTower = function(poured, query_row, query_glass) {
    let dp = new Array(query_row+1).fill(0).map(_=>new Array(query_row+1));

    dp[0][0]=poured;
    for(let r = 1;r<=query_row;r++){
        dp[r][0]=Math.max(dp[r-1][0]   -1,0)/2;
        dp[r][r]=Math.max(dp[r-1][r-1] -1,0)/2;
        for(let j=1;j<r;j++){
            let left  = Math.max(dp[r-1][j-1]-1 ,0)/2;
            let right = Math.max(dp[r-1][j]-1   ,0)/2;
            dp[r][j]=left+right;
        }
    }
    return Math.min(dp[query_row][query_glass],1);
}