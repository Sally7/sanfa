let arr = [2,3,4,5]//添加+、-

function findTargetSumWays1(arr,s) {
	return process1(arr, 0, s);
}

// 可以自由使用arr[index....]所有的数字！
// 搞出rest这个数，方法数是多少？返回
// index == 7 rest = 13
// map "7_13" 256
function process1(arr,index,rest) {
	if (index == arr.length) { // 没数了！
		return rest == 0 ? 1 : 0;
	}
	// 还有数！arr[index] arr[index+1 ... ]
	return process1(arr, index + 1, rest - arr[index]) + process1(arr, index + 1, rest + arr[index]);
}
let a= findTargetSumWays1(arr,6)
console.log(a,11111)