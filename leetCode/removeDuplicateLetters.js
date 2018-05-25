// 给定一个仅包含小写字母的字符串，
// 去除重复的字母使得所有字母出现且仅出现一次。
// 你必须保证返回结果是所有可能结果中的以字典排序的最短结果。
//
// 例如:
//
// 给定 "bcabc"
// 返回 "abc"
//
// 给定 "cbacdcbc"
// 返回 "acdb"
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    var _map = {} , _arr = []
    for(var i = 0;i<s.length;i++){
        var _item = s[i]
        var _index = _arr.indexOf(_item)
        if(_index > -1){
            var _arrFilter = _arr.filter((item,i)=>{
                return item <= _item && i > _index
            })
            console.log(_item,_arrFilter)
            if(_arrFilter.length){
                _arr.splice(_index,1)
                _map[_item] = _arr.length
                _arr.push(_item)
            }
        } else {
            _map[_item] = _arr.length
            _arr.push(_item)
        }
        console.log(_arr)

    }
    console.log(_arr.join(''))
};
var s = 'cbacdcbc'
// var s = 'bcabc'
removeDuplicateLetters(s)