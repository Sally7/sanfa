let arr = [20867,25786,13932,11112,18239,25481,2607,8855,9788,28461,27950,9814]
let arr1 = arr.filter((item)=>{return item%2 ==0})//偶数
let arr2 = arr.filter((item)=>{return item%2 !=0})
let used = new Array(arr1.length).fill([]).map(() => new Array(arr2.length).fill(0))
let max = 0
let k= 0
dp(arr1,arr2)
function dp(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            let sum = arr1[i]+arr2[j]
            if(isSu(sum)){
                used[i][j] =1
            }
        }
    }
    console.log(used)
    findMax(used)
}
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