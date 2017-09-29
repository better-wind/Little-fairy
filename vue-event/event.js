function V(){
    this._event = {}
}
V.prototype.$on = function(name,fn){
    this._event[name] = fn
}
V.prototype.$emit = function(event){
    let cbs = this._event[event]
    // let args = Array.from(arguments).slice(1)
    let args = toArray(arguments,1)
    cbs.apply(this,args)
}
function toArray (list, start) {
    start = start || 0
    let i = list.length - start
    const ret = new Array(i)
    while (i--) {
        console.log(i)
        ret[i] = list[i + start]

    }
    return ret
}
var v = new V()
v.$on('click',function(msg){
    console.log(msg)
})
v.$emit('click','emit')

