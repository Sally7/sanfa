var restoreIpAddresses = function(s) {
    let arr =[]
    let len =0
    let str=''
    let ans = []
    dp(s,0,arr)
    console.log(2,1,1,222,)
    function dp(rest,index,arr,num){
        console.log(num,rest,arr)
        let s1 = rest.slice(index,index+1)
        let s2 = rest.slice(index,index+2)
        let s3 = rest.slice(index,index+3)
        if(arr.length==4&&rest.length==0){
            ans.push(arr.join('.'))
            return
        }
        if(arr.length==4&&rest.length!=0 ||rest.length<(4-arr.length)||rest.length>(4-arr.length)*3){
            return
        }
        if(s1.length&&arr.length<4){
            arr.push(s1)
            dp(rest.slice(index+1),0,arr,1)
            arr.pop()
        }
        //+++++++需要判断 rest 的剩余长度 +++++++
        if(s2[0]!=0&&arr.length<4&&rest.length>1){
            arr.push(s2)
            dp(rest.slice(index+2),0,arr,2)
            arr.pop()
        }
        if(Number(s3)<256&&s3[0]!=0&&arr.length<4&&rest.length>2){
            arr.push(s3)
            dp(rest.slice(index+3),0,arr,3)
            arr.pop()
        }
    }
    // ans = [...new Set(ans)]
    console.log(ans,2222)
};
restoreIpAddresses('101023')