     let obj = {}
     Object.defineProperty(obj, "key", {
       configurable:true,
       enumerable:true,
       writable:false,
       value:'static'
     });
     console.log(obj)
     for(let i in obj){
       console.log(obj[i])
     }
     let i = ''
     Object.defineProperty(obj, "key", {
       configurable:true,
       enumerable:true,
       set:function(val){
         console.log('像我设置'+val)
         i = val
       },
       get:function(){
         console.log('像我取值');
         return i
       },
     });
     obj.key = 'change'
     console.log(obj.key)
