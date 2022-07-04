function main(){
    let N;
    let  candy;
    let min=1000001;
    let sum=0;
    let count=0;                                                //不要忘记初始化
    for(let i=0;i<N;i++){
        sum+=candy;
        count ^=candy;
        if(candy < min){
            min=candy;                                               //找最小值
        }
    }
    if(count==0){
        printf("%d\n",sum-min);
    }else{
        printf("NO");
    }
    return 0;
}