let str = '25606 9056 17585 9754 29060 978 3156 9997 13286 3419 18853 5325 1580 292 24811 943 18898 6507 6270 7296 15538 20251 28206 10001 818 3953 993 15744 8489 20700 18853 24969'
let arr = str.split(' ')
// arr.sort()
// let used = new Array(arr1.length).fill([]).map(() => new Array(arr2.length).fill(0))
let arr1 = arr.filter((item)=>{return item%2 ==0})//偶数
let arr2 = arr.filter((item)=>{return item%2 !=0})

let max = 0
let k= 0
let oArr =new Array(arr1.length).fill(0)
let jArr =new Array(arr2.length).fill(0)
let use =[]
doSum(arr1,arr2)
function doSum(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            let sum = Number(arr1[i])+Number(arr2[j])
            if(isSu(sum)){
                // used[i][j] =1
                use.push([i,j])
            }
        }
    }
    console.log(dp(0,0,oArr,jArr))

}
function dp(i,count,oArr,jArr,type){
    if(i>=Math.max(use.length,arr1.length)){
        max = Math.max(count,max)
        return max
    }else{
        let o = use[i][0]
        let j = use[i][1]
        console.log(i,o,j,oArr,jArr)
        let oArr2=[].concat(oArr)
        let jArr2=[].concat(jArr)
        if(!oArr[o]&&!jArr[j]){
            oArr2[o]=1
            jArr2[j]=1
        }
        return Math.max(dp(i+1,count+1,oArr2,jArr2,),dp(i+1,count,oArr,jArr,))
    }
}
function isSu(num) {
    let suArr = [];
    for (let i = 2; i * i <= num; i++) {
        while (num % i == 0) {
            suArr.push(i);
            num = num / i;
        }
    }
    if(num==0){
        return false
    }
    return suArr.length==0;
}



//求矩阵对角线
// findMax(used)
function findMax(used){
    while (k<used.length){//arr1 或 2小的长度
        let count1 =0,count2=0,count3 =0,count4=0
        for(let i=k;i<used.length;i++){//正向主
            count1 +=used[i][i-k];//一种
            count2 +=used[i-k][i];//一种

        }
        console.log('出来',k)
        for(let i=k;i<used.length-k;i++){//逆向主
            count3 +=used[used.length-1-i][i];//一种
            count4 +=used[i][used.length-1-i];//一种
        }
        console.log(k,count1,count2,count3,count4)
        max = Math.max(count1,count2,count3,count4,max)
        if(max>used.length-k){
            console.log(max)
            return
        }
        k++
    }
    console.log(max)
}

