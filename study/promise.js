
     Promise.resolve().then(function() {
       console.log('promise1');
     }).then(function() {
       console.log('promise2');
     }).then(function() {
       console.log('promise3');
     });

     console.log('script end');
     function doSomething() {
       return new Promise(function(resolve, reject) {
         console.log('call doSomething')
         if (1){
           resolve('doSomething');
         } else {
           reject();
         }
       })
     }
     function doSomethingElse(){
         return new Promise(function(resolve, reject) {
           console.log('call doSomethingElse')
           if (1){
             resolve('doSomethingElse');
           } else {
             reject();
           }
         })
     }
     function finalHandler(msg){
        console.log(msg)
     }
     doSomething().then(()=>{
         return doSomethingElse()
     }).then(finalHandler)
     doSomething().then(()=>{
       doSomethingElse()
     }).then(finalHandler)
     doSomething().then(doSomethingElse())
       .then(finalHandler)
     doSomething().then(doSomethingElse)
       .then(finalHandler)
