function quickSort(arr){
    if(arr.length < 1){
        return arr
    }
    let _leftArr = [],
        _rightArr = [],
        q = arr[0]
    for(let i = 1,_len = arr.length;i<_len;i++){
        if(arr[i] > q){
            _rightArr.push(arr[i])
        } else {
            _leftArr.push(arr[i])
        }
    }
    return [].concat(quickSort(_leftArr),[q],quickSort(_rightArr))
}
let a = [9,8,6,5,7]
console.log(quickSort(a))