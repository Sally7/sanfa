let s1='99999'
let s2='99'
function doSum(s1,s2,jinzhi){
    let len = 0
    let str=''
    if(s1.length>s2.length){
        len = s1.length
        s2 = s2.padStart(len,0)
    }else{
        len = s2.length
        s1 = s1.padStart(len,0)
    }
    let jinwei = 0
    for(let i=len-1;i>=0;i--){
        let sum = Number(s1[i])+Number(s2[i])+jinwei
        console.log(str,sum)
        jinwei = 0
        if(sum < jinzhi){
            str= sum + str
        }else{
            str = (sum % jinzhi).toString()+str
            jinwei = 1
        }
    }
    console.log(str)
    if(jinwei==1){
        str = jinwei+str
    }
    console.log(str)
}
// doSum(s1,s2,10)

let arr = new Array(4).fill([]).map(()=> new Array(5).fill(0))
console.log(arr)

