function AAA(){
    var time = null
    return function(){
        console.log(time)
        time = new Date()
        console.log(time.getTime())
    }
}
var aaa = AAA()
aaa()
aaa()