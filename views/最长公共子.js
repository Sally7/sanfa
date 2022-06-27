let str1 = readline()
let str2 = readline()
let max =0
if(str1.length>str2.length){
    let a = str1
    str1 = str2
    str2 = a
}

for(let i =0;i<str1.length;i++){
    for(let j = i+1;j<str1.length+1;j++){
        let inStr = str1.slice(i,j+1)
        if(str2.indexOf(inStr)>-1){
            max = Math.max(max,inStr.length)
        }
    }
}
console.log(max)