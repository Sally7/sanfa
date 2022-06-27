let arr =['赵','钱','孙']
arr.sort((a, b) =>
    a.localeCompare(b)
);
console.log(arr)