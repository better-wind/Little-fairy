console.log(parseInt('1',0,['1','2','3']));
console.log(parseInt('2',37));

['1','2','3'].map((item,index,arr)=>{
    console.log(item,index,arr)
})
// parseInt 第二个参数范围 (2,36]
