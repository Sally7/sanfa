let arr = []
let obj ={}
let info = ''
let newArr = []
while(info = readline()){
    let arr1 = info.split(' ')
    let fileArr = arr1[0].split('\\')
    let name = fileArr[fileArr.length-1].substr(-16)+'-'+arr1[1]
    let hang = arr1[1]
    if(obj[name]){
        let count = obj[name]+1
        obj[name] = count

    }else{
        obj[name]= 1
        arr.push(name)

    }
}
console
if(arr.length>8){
    newArr= arr.slice(arr.length-8,arr.length)
}else{
    newArr = arr
}
newArr.forEach(item=>{
    let arr = item.split('-')
    arr.push(obj[item])
    console.log(arr.join(' '))

})