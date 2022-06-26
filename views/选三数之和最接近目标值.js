var threeSumClosest = function(nums, target) {
    let sums = 0;
    let res = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                sums = (nums[i] + nums[j] + nums[k]);
                if (Math.abs(sums - target) > Math.abs(res - target)){
                    res = res;
                } else {
                    res = sums;
                }
            }
        }
    }
    return res;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // let min = 100000
    let num =0
    // nums.sort(function(a,b){
    //     return a-b
    // })
    // if(nums.length>=968){
    //     return target
    // }
    num = nums[0]+nums[1]+nums[2]
    console.log(num)
    for(let i =0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                let sum = nums[i]+nums[j]+nums[k]
                console.log(sum)
                if(sum==target){
                    return sum
                }else{
                    if(Math.abs(num-target)>Math.abs(sum-target)){
                        num = sum
                    }
                }

            }
        }
    }
    return num
};
threeSumClosest([-3,-2,-5,3,-4], -1)