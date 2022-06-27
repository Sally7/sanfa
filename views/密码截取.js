let line = Array.from(readline());
let lArr = [];
let rArr = [];
let arr = [1, 1]; //记录指针在i处的最大长度
function getPsd(str) {
    for (let i = 0; i < str.length; i++) {
        lArr = line.slice(0, i).reverse(); //如果有中心点 必在其中
        rArr = line.slice(i, str.length);
        let minL = Math.min(lArr.length, rArr.length);
        for (let j = 1; j <= minL; j++) {
            if (lArr.slice(0, j).join() == rArr.slice(0, j).join()) {
                arr[0] = Math.max(2 * j, arr[0]);
            } else if (lArr.slice(0, j).join() == rArr.slice(1, j + 1).join()) {
                arr[1] = Math.max(2 * j + 1, arr[1]);
            } else {
                break;
            }
        }
    }
    let max = arr[0] > arr[1] ? arr[0] : arr[1];
    console.log(max);
}
getPsd(line);
