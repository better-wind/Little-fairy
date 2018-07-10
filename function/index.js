// 1
function ZFX(x,y,w,h){
    this.init(x,y,w,h)
}
ZFX.prototype.init = function(x,y,w,h){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
}
ZFX.prototype.draw = function (){

    var _s_ver = '_'
    var _ver = _s_ver.repeat(this.w*2)
    console.log(_ver)
    var _s_his = ' '
    var _his = _s_his.repeat(this.w*2-2)
    for(var i = 0;i< this.h - 2;i++){
        console.log(`|${_his}|`)
    }
    console.log(_ver)
}
var zfx = new ZFX(0,0,15,6)

zfx.draw()


