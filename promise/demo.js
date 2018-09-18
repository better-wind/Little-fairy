/**
 * 返回值
 * await 返回的值
 * async 返回的值  promise
 * await 1 返回 1
 * await fn 返回 方法
 * await promise resolve  没有 resolve 不执行
 * 
 * 
 */


// await 1

// await [2]

// await fn


/**
 * 错误处理
 */
const awaitLoad = ()=> new Promise((reslove)=>{
    var arr = [1,2,3,4,5]
    reslove(arr)
})
const start = async ()=>{
	
    // var load = await 1;
    // 
    function a() {
    	console.log(a)
    }
    var load = await Promise.resolve(a);



    await 1;

    await fn;



    await await Promise.resolve(1);

    await await Promise.resolve(fn);

    


    console.log(load)
    //[1,2,3,4,5]
    // return load
}

start()


	async function f() {
	 
	  const fooPromise = getAsyncFoo();

      const foo = await fooPromise;

	}

f().then((rs)=>{
	console.log(rs)
}).catch((rs)=>{
	console.log(rs)
})
/**
 * 错误处理
 */


	function f() {
    	getAsyncFoo.then(rs => {
    	  if (!rs) {
    	  	// 如何提前返回
    	  } 
    	})
    	.then(() => getAsyncBar())
    	.then(() => getAsyncBaz())
	}




	async function f() {

		if (!await getAsyncFoo()) return;
    	
    	await getAsyncBar(); 

    	await getAsyncBaz();
	}
    




/**
 * 回调地狱
 */



