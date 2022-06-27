function calcGame(line) {
    let sign = false;
    const dp = (arr, res) => {
        //剪枝
        if (res > 24) {
            return;
        }
        //满足条件并剪枝
        if (res === 24) {
            sign = true;
            return;
        }
        if (res < 24) {
            for (let i = 0; i < arr.length; i++) {
                //拷贝下数组，原数组需要多次使用，不能修改
                let newArr = arr.slice();
                //下一次是数组是去掉当前数字的数组
                newArr.splice(i,1);
                if(res===0) {
                    //初始化的时候
                    dp(newArr, arr[i]);
                }else{
                    //正常+-*/
                    dp(newArr, res * arr[i]);
                    dp(newArr, res + arr[i]);
                    dp(newArr, res - arr[i]);
                    dp(newArr, res / arr[i]);
                }
            }
        }
    };
    dp(line, 0);
    console.log(sign);
}
