// 给定一个字符串，找出不含有重复字符的最长子串的长度。

// 示例：

// 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

// 给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

// 给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0
    var _arr = s.split('')
    // var _map = new Map()
    var _map = {}
    _arr.forEach((item,index)=>{
        let _s = item
        let _index = index + 1
        _map[index] = _s.length
        while(_arr[_index] && _s.indexOf(_arr[_index]) == -1){
            _s += _arr[_index]
            // _map.set(index,_s.length)
                _map[index] = _s.length
            _index ++
        }
    })
    _map.length = _arr.length
    return Math.max(...Array.from(_map))
};
lengthOfLongestSubstring('abcabcbb')

// var lengthOfLongestSubstring = function(s) {
//     if (!s.length) return 0;
//     var max = 1, flag = 0
//     for(var i = 0; i < s.length; i++) {
//
//         var index = s.indexOf(s[i], flag)
//         if (index !== -1 && index < i) flag = index + 1;
//
//         max = Math.max(max, i - flag + 1)
//     }
//     return max
// };