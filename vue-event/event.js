function V(){
   this._init()
}
function initEvent(v){
    v._event = Object.create(null)
}
function initMixin(v){
    v.prototype._init = function(){
        initEvent(this)
    }
}
function eventsMixin(v){
    v.prototype.$on = function(name,fn){
        this._event[name] = fn
    }
    v.prototype.$emit = function(event){
        let cbs = this._event[event]
        let args = toArray(arguments,1)
        cbs.apply(this,args)
    }
}
initMixin(V)
eventsMixin(V)
function toArray (list, start) {
    start = start || 0
    let i = list.length - start
    const ret = new Array(i)
    while (i--) {
        ret[i] = list[i + start]

    }
    return ret
}
var v = new V()
v.$on('click',function(msg){
    console.log(msg)
})
v.$emit('click','emit')

