int main(){
    int N;
    scanf("%d",&N);
    int candy;
    int min=1000001;
    int sum=0;
    int count=0;                                                //不要忘记初始化
    for(int i=0;i<N;i++){
        scanf("%d",&candy);
        sum+=candy;
        count^=candy;
        if(candy<min){
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