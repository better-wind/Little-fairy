     setTimeout(function() {
       console.log(1)
     }, 0);
     new Promise(function(resolve) {
       console.log(2);
//        for( var i=0 ; i<10000 ; i++ ) {
//          i == 9999 && resolve();
//        }
       new Promise(function(resolv){
         resolv()
       }).then(()=>{
         resolve();
       })
//        Promise.resolve().then(()=>{
//
//        })
       console.log(3);
     }).then(function() {
       console.log(4);
     });
     console.log(5);
     console.log('script start');

     setTimeout(function() {
       console.log('setTimeout');
     }, 0);
