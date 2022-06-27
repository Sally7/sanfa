let str1='aba'
let str2 ='abcd'
let m= str1.length+1
let n = str2.length+1
let ac = 1
let rc = 1
let dc = 1
var dp = new Array(m).fill([]).map(() => new Array(n).fill(0))
function editCost(str1,str2,ac,dc,rc){
	if(str1==null||str2==null){
		return 0
	}
	for(let i= 1;i<m;i++){
		dp[i][0]= dc*i
	}
	for(let j= 1;j<n;j++){
		dp[0][j] = ac*j
	}
	for(let i=1;i<m;i++){
		for(let j=1;j<n;j++){
			dp[i][j] = dp[i-1][j-1]+(str1[i-1]==str2[j-1]?0:rc)//当前替换代价
			dp[i][j] = Math.min(dp[i][j],dp[i][j-1]+ac,dp[i-1][j]+dc)
		}
	}
	return dp[m-1][n-1]
}

console.log(editCost(str1,str2,1,1,1)) 

// ========创建二维数组
// for(var i = 0; i < 3; i++) {
//     arr[i] = new Array();
//     for(var j = 0; j < 3; j++) {
//        arr[i][j] = 0;
//     }
// }

// const P = new Array(3).fill([]).map(() => new Array(3).fill(false));