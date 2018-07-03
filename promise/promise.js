{
 console.log('21')  
  const PENDING = 'PENDING'
    const FULFILLED = 'FULFILLED'
    const REJECTED = Symbol();
    // function Promisee(fn) {
    //     if (typeof fn != 'function') {
    //         throw new Error('resolver should be a function!');
    //     }
    //
    //     let state = PENDING;
    //     let value = null;
    //     let handler = [];
    //
    //     function fulfill(result) {
    //         state = FULFILLED;
    //         value = result;
    //         handler.forEach(next);
    //         handler = null;
    //     }
    //
    //     function reject(err) {
    //         state = REJECTED;
    //         value = err;
    //         handler.forEach(next);
    //         handler = null;
    //     }
    //
    //     function resolve(result) {
    //         try {
    //             let then = typeof result.then == 'function' ? result.then : null;
    //             if (then) {
    //                 then.bind(result)(resolve, reject);
    //                 return;
    //             }
    //             fulfill(result);
    //         } catch(err) {
    //             reject(err);
    //         }
    //     }
    //
    //     function next({onFulfill, onReject}) {
    //         switch(state) {
    //             case FULFILLED:
    //                 onFulfill && onFulfill(value);
    //                 break;
    //             case REJECTED:
    //                 onReject && onReject(value);
    //                 break;
    //             case PENDING:
    //                 handler.push({onFulfill, onReject});
    //         }
    //     }
    //
    //     this.then = function (onFulfill, onReject) {
    //         return new Promisee((resolve, reject) => {
    //             next({
    //                 onFulfill: (val) => {
    //                     try {
    //                         resolve(onFulfill(val));
    //                     } catch (err) {
    //
    //                     }
    //                 },
    //                 onReject: (err) => {
    //                     reject(onReject(val));
    //                 }
    //             });
    //         });
    //     }
    //
    //     fn(resolve, reject);
    // }
    function TP(fn){
        let state = PENDING
        let value = null
        let handel = []
        function fulfill(result){
            state = FULFILLED
            value = result
            handel.forEach(next)
        }
        function resolve(result,idx){
            let then = result && result.then && typeof result.then == 'function' ? result.then : null;
            // let then = typeof result
            console.log(then)
            if (then) {
                then.bind(result)(resolve)
                return
            }
            fulfill(result)


            // console.log(result)
            // console.log('resolve~~~',idx)
            // fulfill(result)
        }
        function next({onFulfill},idx){
            // console.log('next~~~',idx)
            switch (state){
                case FULFILLED:
                    onFulfill && onFulfill(value)
                    break
                case PENDING:
                    handel.push({onFulfill})
                    break
            }
        }
        this.then = function(onFulfill,idx){
            console.log('------',idx)
            return new TP((resolve)=>{
                // console.log('then~~~',idx)
                next({
                    onFulfill:(val)=>{
                        resolve(onFulfill(val),idx)
                    }
                },idx)
            })

        }
        fn(resolve)
    }
    new TP((resolve)=>{
        // console.log('TP-1')
        setTimeout(function(){
            resolve('TP-Resolve1',0)
        },2000)
    }).then((s)=>{
        console.log('TP-1',s)
        return new TP((resolve)=>{
            setTimeout(function(){
                resolve('TP-Resolve2',0)
            },2000)
        })
    },1111).then((s)=>{
        console.log('TP-2',s)
    },2222).then(()=>{
        console.log('---END---')
    })

}
