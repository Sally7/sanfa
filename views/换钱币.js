
// console.log 多了 会超限
var combinationSum = function(candidates, target) {
    let ans = []
    dp(candidates,target,[],0)
    function dp(candidates,target,arr,index){
        if(target==0){
            let a = [].concat(arr)//直接push 会为空
            ans.push(a)
            return
        }else if(target<0){
            return
        }else{
            for(let i =index;i<candidates.length;i++){
                let cur = candidates[i]
                if(target>=cur){
                    arr.push(cur)
                    dp(candidates,target-cur,arr,i)
                    arr.pop()
                }
            }
        }
    }
    return ans
};