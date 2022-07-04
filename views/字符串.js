
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
    console.log(result)
    return result
}
jieya('2[3[ac]bd]')
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
// console.log(yasuo('aaaaaabbbbbccccaa'))
