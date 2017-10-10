function* genT(arr){
    for(let i = 0,_len = arr.length;i<_len;i++){
        if(typeof arr[i] === 'number'){
            yield arr[i]
        } else {
            yield* genT(arr[i])
        }

    }
}
let _arr = [1,2,[3,4]]
for(let g of genT(_arr)){
    console.log(g)
}
