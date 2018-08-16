var arr = [
    {
        title:'a',
    }
]
var ac = arr.reduce((total,item)=>{
    return {
        title:total.title + item.title
    }
})
console.log(ac);
