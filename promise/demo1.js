const awaitLoad = ()=> new Promise((reslove)=>{
    var arr = [1,2,3,4,5]
    reslove(arr)
})

const start = async ()=>{
	const aaa = awaitLoad();
	console.log(aaa);
}

start()
