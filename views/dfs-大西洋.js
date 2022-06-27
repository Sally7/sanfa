/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let m = heights.length
    let n = heights[0].length
    let ans = []
    let shang = new Array(m).fill([]).map(()=>new Array(n).fill(false))
    let xia =  new Array(m).fill([]).map(()=>new Array(n).fill(false))

    function dfs(r,c,status){
        status[r][c] = true
        let arr = [[r-1,c],[r,c+1],[r+1,c],[r,c-1]]
        arr.forEach(([nItem,cItem])=>{
            console.log(nItem,cItem)
            if(nItem>=0&&nItem<m&&cItem>=0&&cItem<n&&!status[nItem][cItem]){
                console.log(nItem,cItem,heights[r][c],heights[nItem,cItem])
                if(heights[r][c]<=heights[nItem][cItem]){
                    dfs(nItem,cItem,status)
                }
            }
        })

    }
    for(let j=0;j<m;j++){
        dfs(j,0,shang)
        dfs(j,n-1,xia)
    }
    for(let i=0;i<n;i++){
        dfs(0,i,shang)
        dfs(m-1,i,xia)
    }
    for(let k=0;k<m;k++){
        for(let l =0;l<n;l++){
            if(shang[k][l]&&xia[k][l]){
                ans.push([k,l])
            }
        }
    }
    console.log(shang,xia,ans)
    return ans
};
pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])