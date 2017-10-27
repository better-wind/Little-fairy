// function* genT(arr){
//     for(let i = 0,_len = arr.length;i<_len;i++){
//         if(typeof arr[i] === 'number'){
//             yield arr[i]
//         } else {
//             yield* genT(arr[i])
//         }
//
//     }
// }
// let _arr = [1,2,[3,4]]
// for(let g of genT(_arr)){
//     console.log(g)
// }
function readFiles(){
    let _arr = []
    setTimeout(function(){
        _arr = [1,2,3,4,5]
        return _arr
    },3000)
}
function getPoster(s){
    setTimeout(function(){

        return 100
    },3000)
}
function savePoster(){
    console.log('---------')
}

async function start() {
    let files = await readFiles();

    // await只能使用在原生语法
    for (var file of files) {
        savePoster(file, await getPoster(file));
    }
}

start()
