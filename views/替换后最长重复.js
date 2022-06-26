var characterReplacement = function(s, k) {
    let max = 0
    let left =0,right =0
    let arr = new Array(26).fill(0)
    while(right<s.length){
        let temp = s[right].charCodeAt()-'A'.charCodeAt()
        arr[temp]++
        max = Math.max(arr[temp],max)
        if(right-left-max+1>k){
            let temp = s[left].charCodeAt()-'A'.charCodeAt()
            arr[temp]--
            left++
        }
        right++
    }
    console.log(right, left)
    return right- left
};
characterReplacement("AABABBA",
1)