/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let leftStr =''
    let rightStr =''
    for(let i=0;i<head.length;i++){
        if(head.length%2==0){
            if(i<head.length/2){
                leftStr = leftStr+head[i]
            }else{
                rightStr = head[i]+rightStr
            }
        }else{
            if(i<Math.ceil(head.length/2)){
                leftStr = leftStr+head[i]
            }else{
                rightStr = head[i]+rightStr
            }
            console.log(i,head[i],leftStr,rightStr)
        }
    }
    return leftStr.slice(0,rightStr.length) ==rightStr
};
// isPalindrome([1,2,2,1])


var mergeTwoLists = function(list1, list2) {

    console.log([...list1,...list2])

};
// mergeTwoLists([1,2,4], [1,3,4])

/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    let fa = 0
    if(queryIP.indexOf(':')>-1){
       let arr =  queryIP.split(':')
        if(arr.length!=8){
            return 'Neither'
        }
        arr.forEach(item=>{
            if(item.length==0||item.length>4){
                fa = 1
            }
            if(!(/[^a-f0-9]/gi.test(item))){
                fa = 1
            }

        })
        return fa ==1?'Neither':'IPv6'
    }else{
        let arr =  queryIP.split('.')
        if(arr.length!=4){
            return 'Neither'
        }
        arr.forEach(item=>{
            console.log(item,item>255)
            if(item<0||item>255){
                fa = 1
            }
            console.log(fa,172,(/[[^[0-9]]]/g.test('172')))
            if((/[^[0-9]]/g.test(item))){
                fa = 1
            }
            console.log(fa)
            if(!(/^0/g.test(item))){
                fa = 1
            }
            console.log(fa)
        })
        console.log(22222)
        return fa ==1?'Neither':'IPv4'
    }
};
// validIPAddress("172.16.254.1")

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let obj = {}
    words.forEach(item=>{
        if(obj[item]){
            obj[item]++
        }else{
            obj[item] = 1
        }
    })
    let arr = Object.entries(obj)
    // arr.forEach((item,index)=>{
    //     item.push(index)
    // })
    console.log(arr)
    arr.sort(function(a,b){
        if(b[1]==a[1]){
            if(a[0]>b[0]){
                return 1
            }
            if(a[0]<b[0]){
                return -1
            }
            return 0
        }else{
            return b[1]-a[1]
        }
    })
    console.log(arr)
    let arrB = arr.slice(0,k)
    let newArr = []
    arrB.forEach(item=>{
        newArr.push(item[0])
    })
    return newArr
};
// topKFrequent(["i","love","leetcode","i","love","coding"],3)

var repeatedStringMatch = function(a, b) {

    let repeatStatus = b.indexOf(a)>-1
    if(!repeatStatus&&a.length<b.length){
        return -1
    }
    if(a==b){
        return 1
    }
    if(a.length>b.length){
        if(a.indexOf(b)>-1){
            return 1
        }else{
            return -1
        }
    }
    if(a.length<b.length){
        let len =0
        let reg = new RegExp(a,'g')
        let splitArr = b.split(a)
        // let len =b.split(a).length+ b.match(reg).length
        splitArr.forEach((item)=>{
            if(item&&a.indexOf(item)==-1){
                return -1
            }
            if(item && a.indexOf(item)>-1){
                len++
            }
        })
        console.log(len+b.match(reg).length)
    }

};
// repeatedStringMatch('a','a')

var canChoose = function(groups, nums) {
let numsString =','+ nums.join(',')
    for(let j = 0;j<groups.length;j++){
        let cur = groups[j].join(',')
        if(numsString.indexOf(cur)>-1){
            numsString=','+numsString.slice(numsString.indexOf(cur)+cur.length+1)
        }else{
            console.log(222)
            return false
        }
    }
    console.log(111)
    return true
};
// canChoose([[1,2,3],[3,4]],[7,7,1,2,3,4,7,7])

var merge = function(intervals) {
    let last = []
    let arr = []
    let lastIndex = 0
    for(let i =0;i<intervals.length;i++){
        let newArr =[]
        let cur = intervals[i]
        console.log(last,intervals[0],last[1])
        if(last.length==2){
            console.log(cur[0],last[1])
            if(cur[0]<=last[1]){
                newArr = [last[0],cur[1]]
                arr[lastIndex] = newArr
            }else{
                newArr = cur
                lastIndex++
                arr.push(newArr)
            }
            last = newArr
        }else{
            arr.push(cur)
            lastIndex = 0
            last = cur
        }

    }
    console.log(arr)
};
// merge([[1,4],[4,5]])
var majorityElement = function(nums) {
    let n = nums.length/3
    let last = ''
    let count = 1
    let arr = []
    nums.sort()
    nums.push(' ')
    nums.forEach(item=>{
        let cur = item
        if(cur.toString()!=last.toString()){
            console.log(cur,last,count,n,22222,last.toString()!='')
            if(count>n&&last.toString()!=''){
                arr.push(last)
            }
            last = cur
            count =1
        }else{
            count++
        }
    })
    console.log(arr)
    return arr
};
// majorityElement([0,0,0])

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
// restoreIpAddresses('101023')
var combinationSum = function(candidates, target) {
    let ans = []
    let arr1 = []
    dp(candidates,target,arr1,0)
    if(candidates.length>100){
        ans = []
    }
    function dp(candidates,target,arr,index){
        if(target==0){
            let a = [].concat(arr)
            ans.push(a)
            return
        }else if(target<0){
            return
        }
        for(let i =index;i<candidates.length;i++){
            let cur = candidates[i]
            if(target>=cur){
                arr.push(cur)
                dp(candidates,target-cur,arr,i)
                arr.pop()
            }
        }
    }
    console.log(ans,2222222)
};
// combinationSum([2,7,6,3,5,1]
//     ,9)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let outList=[]
    zhuhe(nums)
    function zhuhe(arr){
        for(let i=0;i<arr.length;i++){
            let cur = arr[i]
            let curStr = arr[i]+''
            if(outList.indexOf(curStr)==-1){
                outList.push(curStr)
            }
            for (let j = i+1;j<arr.length;j++){
                outList.push(curStr + arr[j])
            }
        }
    }
    let out2 = []
    outList.forEach(item=>{
        let  a = item.split('')
        out2.push(a)
    })
    out2.unshift([])
    console.log( out2.unshift([]),out2)
    return out2

};
// subsetsWithDup([1,2,3])


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let sum = 0
    ziji(0,1)
    function ziji(index,ji){
        for(let i=index;i<nums.length;i++){
            ji = nums[i]
            console.log(ji,nums[i],index)
            if(ji<k){
                sum++
            }
            for(let j=i+1;j<nums.length;j++){
                ji = ji*nums[j]
                if(ji<k){
                    sum++
                }
            }
        }
    }
    console.log(sum,22222)
    return sum

};

// numSubarrayProductLessThanK([10,5,2,6],  100)

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let max = 0
    for(let i =0;i<s.length;i++){
        let cur = s[i]
        console.log(cur,i)
        let len = 1
        let step =k
        for(let j= i+1;j<s.length;j++){
            console.log(i,j,s[j],cur)
            if(s[j]==cur){
                len++
            }else if(step>-1){
                step--
                if(step==-1){
                    max = Math.max(max,len)
                    break
                }
                len++
            }
            if(j==s.length-1){
                max = Math.max(max,len)
                break
            }

        }
    }
    console.log(max)
    return max
};
// characterReplacement("ABAA"
// ,0)


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let min = 100000
    let num =0
    for(let i =0;i<nums.length-2;i++){
        let sum = nums[i]+nums[i+1]+nums[i+2]
        console.log(sum,Math.abs(sum-target),min,i)
        // if(Math.abs(sum-target)<min){
        //     min = Math.abs(sum-target)
        //     num = sum
        // }
    }
    // return num
};
//
// threeSumClosest([1,1,1,0]
//     ,-100)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = []

    for(let i=0;i<nums.length-2;i++){
        let path = []
        let sum = nums[i]
        for(let j=i+1;j<nums.length;j++){
            let arr = [].concat(nums).slice(j+1)
            console.log(arr)
            let other = 0-sum-nums[j]
            console.log(other,arr.includes(other))
            if(arr.includes(other)){
                path=[sum,nums[j],other].sort()
                ans.push(path)
            }
        }

    }
    let obj ={}
    ans.forEach(item=>obj[item]=item)
    ans = Object.values(obj)
    console.log(ans)
    return ans

};
threeSum([-1,0,1,2,-1,-4])