var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});
obj.count = {
    a:12
}
obj.count.b = 45
console.log(obj.count.a)

var sharedPropertyDefinition = {}
function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
        return this[sourceKey][key]
    }
    sharedPropertyDefinition.set = function proxySetter (val) {
        this[sourceKey][key] = val
    }
    Object.defineProperty(target, key, sharedPropertyDefinition)
}
let _opts = {
    _data:{
        a:1
    }
}
proxy(_opts,`_data`,'a')
console.log(_opts._data.a)
console.log(_opts.a)

