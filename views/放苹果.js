let [m,n] = readline().split(' ')
console.log(dp(m,Number(n)))
function dp(a,p){
    if(a==0||p==1){
        return 1
    }
    if(a<p){
        return dp(a,a)
    }else{
        //每个盘子的情况 都有一个苹果 ，剩下的苹果
        //选出有一个盘子为空，往剩下的盘子中放苹果（...后续也会选择为空的盘子）
        return dp(a-p,p)+dp(a,p-1)
    }
}