//====连续的子集 字符串(有/无重复皆可)=======
// a ab abc b bc c
// let arr =['a','b','c']
// let len = arr.length
let outList = []
function zuhe(arr) {
	for (let i = 0; i < arr.length; i++) {
		let cur = arr[i]
		let curStr = arr[i]
		if (outList.indexOf(cur) == -1) {
			outList.push(cur)
		}
		for (let j = i + 1; j < arr.length; j++) {
			curStr = curStr + arr[j]
			outList.push(curStr)
		}
	}
	console.log(outList)
}
// zuhe(arr)
//====连续的子集 数组(有/无重复皆可)=======
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
	let ans = []
	ziji(nums)
	function ziji(arr){
		for(let i =0;i<arr.length;i++){
			let cur = arr[i]
			let path = [].concat(cur)
			ans.push(path)
			let newArr = [].concat(path)
			for(let j=i+1;j<arr.length;j++){
				newArr.push(arr[j])
				ans.push(newArr)
			}
		}
	}
	ans.unshift([])
	return ans
};
// subsets([1,2,3])



//===全排列(有/无重复皆可)=====
//abc acb bac bca cab cba
// let arr =['a','b','c']
// let len = arr.length
// let outList = []
function pailie(iArr, outStr) {
	if (outStr.length == len) {
		if (outList.indexOf(outStr) == -1) {
			outList.push(outStr) //过滤重复
		}
		return
	} else {
		for (let i = iArr.length - 1; i >= 0; i--) {
			let newArr = [].concat(iArr)
			let str = outStr + newArr[i]
			newArr.splice(i, 1)
			pailie(newArr, str)
		}
	}
}
// pailie(arr, '')



//全组合 字符串
let data = ['a','b','c'];
let outlist =[]

// getGroup(data,0,outlist)
function getGroup(data, index, outlist) {
	console.log(222222)
	let arr =[]
	let cur = data[index]
	arr.push(cur);
	for(let i = 0; i < outlist.length; i++) {
		arr.push(outlist[i] + cur);
	}
	// push.apply合并数组是把后一个数组的值依次push进前一个数组，使前一个数组发生改变，并且只能两个数组之间发生合并
	outlist = [...outlist,...arr]
	// outlist.push.apply(outlist, arr);===outlist = [...outlist,...arr]
	if(index + 1 >= data.length) return outlist;
	else return getGroup(data, index + 1, outlist);
}
// console.log(getGroup(data,0,outlist))
// ======二维数组去重
// let aa = [[1, 2], [2, 3], [1, 2]]
// let obj = {};
// aa.forEach(item => obj[item] = item);
// aa = Object.values(obj);
// console.log(aa);
// [[1, 2]
//  [2, 3]]

console.log(getGroup(data,0,outlist))
// 数组的全组合
//[
//   [], [ 1 ],[ 1, 2 ], [ 1, 2, 3 ],[ 1, 3 ], [ 2 ], [ 2, 3 ], [ 3 ]
// ]
var subsets = function(nums) {
	let ans = []
	ziji(0,[])
	function ziji(index,path){
		ans.push([...path])
		for(let i = index;i<nums.length;i++){
			path.push(nums[i])
			ziji(i+1,path)
			path.pop()
		}
	}
	console.log(ans)
	return ans
};
subsets(['a','b','c'])

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
	// 先排序
	nums.sort((a, b) => a - b);
	const res = [];
	const backtrack = (index, path, isChoosePre) => {
		if (index == nums.length) return res.push(path.slice());
		/* 这句话要放在判断 isChoosePre 前面
        不选择当前的数字 */
		backtrack(index + 1, path, false);
		// 如果上一个数没有选择，并且上一个数和当前数字相同则跳过，如果不跳过的话就会出现重复
		if (!isChoosePre && nums[index - 1] === nums[index]) return;
		// 加入路径中
		path.push(nums[index]);
		// 选择当前的数字
		backtrack(index + 1, path, true);
		// 递归完成后，回退回原状态  撤销选择
		path.pop();
	};
	// 没有选择上一个元素，从第0个元素开始做选择
	backtrack(0, [], false);
	return res;
};






