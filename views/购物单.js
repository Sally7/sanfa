let arr=[{
    money:100,level:3,q:0,children:[]},{
    money:400,level:5,q:0,children:[]},{
    money:1300,level:5,q:1,children:[]},{
    money:1400,level:2,q:2,children:[]},{
    money:500,level:2,q:0,children:[]},{
    money:800,level:2,q:0,children:[]},{
    money:1400,level:5,q:0,children:[]},{
    money:300,level:5,q:0,children:[]},{
    money:1400,level:3,q:0,children:[]},{
    money:500,level:2,q:0,children:[]},{
    money:1800,level:4,q:0,children:[]},{
    money:400,level:5,q:9,children:[]},{
    money:1300,level:5,q:9,children:[]},{
    money:1400,level:3,q:0,children:[]},{
    money:500,level:2,q:0,children:[]},{
    money:800,level:2,q:0,children:[]},{
    money:1400,level:5,q:0,children:[]},{
    money:300,level:4,q:0,children:[]},{
    money:1400,level:3,q:0,children:[]},{
    money:500,level:2,q:0,children:[]},{
    money:1800,level:2,q:0,children:[]},{
    money:400,level:5,q:20,children:[]},{
    money:1300,level:5,q:20,children:[]},{
    money:1400,level:3,q:0,children:[]},{
    money:500,level:2,q:0,children:[]},{
    money:800,level:5,q:0,children:[]},{
    money:1400,level:5,q:0,children:[]},{
    money:300,level:5,q:0,children:[]},{
    money:1400,level:3,q:27,children:[]},{
    money:500,level:2,q:27,children:[]},]

var info = "";
let i = 0;
let children = [];
// while ((info = readline())) {
//   let money = info.split(" ")[0];
//   let level = info.split(" ")[1];
//   let q = info.split(" ")[2];
//   arr.push({ money: Number(money)/10, level: Number(level), q: Number(q), children: [] });
// }

arr.forEach((item, index) => {
    if (item.q != 0) {
    if (arr[Number(item.q) - 1].children) {
        let i = item.q - 1
        let indexs = arr[item.q - 1].children.length;
        arr[item.q- 1].children[indexs] = item;
    } else {
        arr[item.q - 1].children = [item];
    }
}
});
let zhuArr = arr.filter((item) => item.q == 0);
zhuArr.sort(function (a, b) {
    return b.money - a.money;
});
function dp(money, arr) {
    for (let i = arr.length - 1; (i) => 0; i--) {
        let used = i >= 0 ? arr[i].money : 0;
        let level2 = i >= 0 ? arr[i].level : 0;
        let children2 = i >= 0 ? arr[i].children : [];
        let items = i >= 0 ? arr[i] : {};
        if (money < 0 || money - used < 0 || i < 0) {
            return 0;
        } else if (i == 0 && !children2) {
            return used * level2;
        } else{
            let jiequ = arr.slice(0, i);
            if (arr[i].children && arr[i].children.length) {
                let chuli = jiequ.concat(children2).sort(function (a, b) {
                    return b.money - a.money;
                });
                return Math.max(
                    dp(money, jiequ),
                    dp(money - used, chuli) + used * level2
                );
            } else {
                return Math.max(
                    dp(money, jiequ),
                    dp(money - used, jiequ) + used * level2
                );
            }
        }
    }
}
console.log(Number(dp(Number(18000), zhuArr)))
