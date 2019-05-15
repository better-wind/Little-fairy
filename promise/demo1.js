const awaitLoad1 = ()=> new Promise((reslove)=>{
    var arr = [1,2]
    console.log('--------');
    setTimeout(()=>{
      reslove(arr)
    },3000)
})
const awaitLoad2 = ()=> new Promise((reslove)=>{
  var arr = [3,4]
  console.log('==========');
  setTimeout(()=>{
    reslove(arr)
  },3000)
})
const awaitLoad3 = ()=> new Promise((reslove)=>{
  var arr = [4,5]
  console.log('~~~~~~~~~~~');
  setTimeout(()=>{
    reslove(arr)
  },2000)
})

const start = async ()=>{
  console.log('start A1')
	const a1 = awaitLoad1();
	console.log('start A2')
	const a2 = awaitLoad2();
	await awaitLoad3();
	const aa1 = await a1;
	const aa2 = await a2;
  console.log(aa1);
	console.log(aa2);
}

start();
