var twoEggDrop = function(n) {
    let arr = [n]
    for(let i =1;i<=n;i++){
        if(arr[i-1]-i>0){
            arr[i] = arr[i-1] - i
        }else{
            break
        }
    };
    return dp(1,arr)

};
function dp(status,arr){//status  0 碎了 1没碎
// console.log(status,arr)
    for (let i=arr.length-1;i>=0;i--){
        if(status==0){
            return arr[i]- arr[i-1]
        }else if(i==0){
            return 1
        }else{
            return Math.max(dp(0,arr),dp(1,arr.slice(0,i))+1)
        }
    }
}