function diejia(arr){
    arr.sort((function (a,b){
        console.log(a[0],b[0])
        if(a[0]-b[0]>0){
            return -1
        }else if(a[0]-b[0]==0&&a[1]-b[1]>0){
            return -1
        }

    }))
    console.log(arr)
    let left=0,right=0,num=0,max=0,index=0
    for(let i=0;i<arr.length-1;i++){
        for (let j=i+1;j<arr.length;j++){
            if(arr[j-1][0]>arr[j][0]&&arr[j-1][1]>arr[j][1]){
                num++
            }
        }
        max = Math.max(num,max)
    }
    console.log(max)
}
diejia([[10, 7],[1, 7],[10, 8],[13, 9],[1, 2],[20, 20],[14, 17],[20, 16],[20, 13],[15, 18],[11, 9],[11, 8],[19, 16]])
