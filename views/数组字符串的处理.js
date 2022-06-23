//====全组合(有/无重复皆可)=======
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
zuhe(arr)




//===全排列(有/无重复皆可)=====
let len = arr.length

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
pailie(arr, '')
console.log(outList)



//字符串压缩
function yasuo(strs) {
	let pre = strs[0];
	let curNum = 1
	let res = ''
	for (let i = 1; i < strs.length; i++) {
		const str = strs[i]
		if (str === pre) {
			curNum++
		} else {
			res += pre
			res += curNum
			pre = str
			curNum = 1
		}
	}
	res += pre
	res += curNum
	return res.length > strs.length ? strs : res
}
console.log(yasuo('aaaaaabbbbbccccaa'))
//字符串解压
function jieya(str) {
	let numStack = [];
	let strStack = [];
	let num = 0
	let result = ''
	for (let char of str) {
		if (/\d/.test(char)) {
			num = num * 10 + Number(char)
		} else if (char == '[') {
			strStack.push(result)
			result = ''
			numStack.push(num)
			num = 0
		} else if (char == ']') {
			let repeatTimes = numStack.pop()
			result = strStack.pop() + result.repeat(repeatTimes)
		} else {
			result = result + char
		}
	}
	return result
}
