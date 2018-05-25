//
// 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
//
// 示例 1:
//
// 输入: "(()"
// 输出: 2
// 解释: 最长有效括号子串为 "()"
// 示例 2:
//
// 输入: ")()())"
// 输出: 4
// 解释: 最长有效括号子串为 "()()"

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParenthesesM = function(s) {
    // var _s = s.replace(/(\(\))/g,'M')
    // var _arr = _s.split(/\)|\(/)
    // var _len = 0
    // for(var i = 0,j=_arr.length;i<j;i++){
    //     var _item = _arr[i]
    //     _len = _item.length > _len ? _item.length : _len
    // }
    // return _len * 2
    var _left = [],_right = [],_select = []
    for(var i in s){
        var _s = s[i]
        if( _s === '('){
            _left.push(i)
        } else if (_s === ')'){
            if(_left.length){
                _select.push(_left.pop())
                _select.push(i)
            }
        }
    }
    _select.sort((a,b)=> a- b)
    var _sS = ''
    for(var i in s){
        if(_select.includes(i)){
            _sS += s[i]
        } else {
            _sS += '-'
        }
    }
    var _sA = _sS.split('-')
    var _len = 0
    _sA.forEach((item)=>{
        _len = item.length > _len ? item.length : _len
    })
    return _len
};

var longestValidParentheses = function (s) {
    var stack = [];
    var res = 0, start = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                start = i + 1;
            } else {
                stack.pop();
                res = stack.length === 0 ? Math.max(res, i - start + 1) : Math.max(res, i - stack[stack.length - 1]);
            }
        }
    }
    return res;
};
var s = ')((()()))(()())(()'
console.log(longestValidParentheses(s))
