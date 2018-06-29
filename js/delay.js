function A(a,d){


}
A.prototype.start = function(a,d){
    for(let i = 0;i< a.length;i++){
        setTimeout(()=>{
            this.play(a[i])
        },i*d)
    }
}
A.prototype.play = function(s){
    console.log(s)
}
var a = new A()
a.start([1,2,3],1000)