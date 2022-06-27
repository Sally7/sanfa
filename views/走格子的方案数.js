let arr = readline().split(" ");
let m = Number(arr[0]);
let n = Number(arr[1]);
let min = Math.min(m, n);
let chengji = 1;
let fenmu = 1;
for (let i = 0; i < min; i++) {
    chengji = chengji * ( m + n-i);
}
for (let j = 1; j <= min; j++) {
    fenmu = fenmu * j;
}
console.log(chengji / fenmu);