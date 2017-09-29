function xmPx(table,people){
    if(!table || table.match(/1{2}/g)) return false
    if(!people) return false
    let startStr = table.match(/^0+/),
        endStr = table.match(/0+$/),
        cenStr = table.match(/0+/g)
    if(startStr && startStr.length) cenStr.shift()
    if(endStr && endStr.length) cenStr.pop()
    let _num = checkArrNum(startStr) + checkArrNum(endStr) + checkArrNum(cenStr,1)
    if(_num < people) return false
    return true
}
function checkArrNum(arr,type){
    let num = 0
    if(!arr || !arr.length) return num
    arr.map((item)=>{
        let _len = type == 1 ? item.length -1 : item.length
        let _num = parseInt(_len/2)
        num += _num
    })
    return num
}
const table = '000100000010010000100'
const num = 10
console.log(xmPx(table,num))