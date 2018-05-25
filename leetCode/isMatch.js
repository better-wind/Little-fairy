/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    p  = p.replace(/\*{2,}/g,'*').replace(/\.\*/g,'&*')
    var _reg = '^',_sign = '[a-z]',_index = -2
    for(let i in p){
        var r = p[i]
        if(r != '*'){
            _sign = p[i]
            _index = i
        } else {
            _sign = '[a-z]'
        }
        // _reg +=  Math.abs(i-_index) == 1 ? '' : _sign

        if(r == '.'){
            _reg += '[a-z]{1}'
        } else if(r == '*'){
            _reg +=  Math.abs(i-_index) == 1 ? '' : _sign
            _reg += '*'
        } else {
            _reg +=  Math.abs(i-_index) == 1 ? '' : _sign
        }
    }
    _reg += '$'
    _reg = _reg.replace(/&/g,'[a-z]')
    var reg = new RegExp(_reg)
    console.log(reg,s)
    return reg.test(s)
};

// var s = 'mississippi'
// var p = 'mi.s*is*ip*.'
// var s = 'ab'
// var p = '.*'
// var s = 'aaa'
// var p = 'a.a'
// var s = 'ab'
// var p = '.*..'
var s = "aasdfasdfasdfasdfas"
var p = "aasdf.*asdf.*asdf.*asdf.*s"
console.log(isMatch(s,p))

