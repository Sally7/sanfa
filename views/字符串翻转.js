var reverseParentheses = function (s) {
    let ans = s;
    let reverse = (s) => {
        return s.split("").reverse().join(""); //反转字符串
    }
    let match = [];//用一个数组作为括号的栈
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            match.push(i + 1);//入栈 存储一个左括号的位置
        } else if (s[i] == ')') {
            let m = match.pop();//出栈 取出末尾一个左括号的位置 pop ()返回左括号的位置
            ans = ans.substring(0, m) + reverse(ans.substring(m, i)) + ans.substring(i, ans.length);
            //反转指定的部分  substring() 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符。
            //由内部向外翻转
        }
    }
    console.log(ans.replace(/\(|\)/g,''))
    // return ans.replaceAll('(', '').replaceAll(')', '');//最后去除字符串里的括号
};

reverseParentheses('a(bcdefghijkl(mno)p)q')
