let reg = '/^(W|A|S|D){1}\d{1,2}$/' //以WASD开头 后面跟 1-2位数字

// var r = /^abc$/;
// str = "abc";
// r = RegExp("^"+str + "$","i");


//     /(\w)\1+/
let str='MJLJLbcddcb'
console.log(str.replace(/(\w)\1+/g,''))
let len = true
let strLen = str.length
while (len){
    strLen = str.length
    str =str.replace(/(\w)\1+/g,'')
    len = str.length< strLen?true:false
    console.log(len,strLen)
}

console.log(str)

let arr = str.split(' ')
sum = arr.reduce(function(a,b){
    return Number(a)+Number(b)
})
console.log(sum-Number(arr[0]))