// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。
//
// 示例 1：
//
// 输入: "babad"
// 输出: "bab"
// 注意: "aba"也是一个有效答案。
// 示例 2：
//
// 输入: "cbbd"
// 输出: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var flag = 0,_p = ''
    for(let i = 0;i<s.length;i++){
        flag = s.lastIndexOf(s[i],s.length-1)
        while(s.lastIndexOf(s[i],flag) > -1 && flag > -1){
            var _sub = s.slice(i,flag+1)
            if(_sub.split('').reverse().join('') == _sub){
                _p = _sub.length > _p.length ? _sub : _p
                break;
            } else {
                flag = s.lastIndexOf(s[i],flag-1)
            }

        }
    }
    return _p
};
var longestPalindrome2 = function(s) {
    if(s.length <= 1) return s;
    var len = s.length;
    var lpos = 0, lmax = 0;
    for(var i = 0; i != len; i++) {
        console.log(i)
        if(lmax > (len - i) * 2) return s.substring(lpos, lpos + lmax);
        var count = 0;
        while(i != len - 1 && s.charAt(i) == s.charAt(i+1)) {
            count++;
            i++;
        }
        var first = i - count;
        var end = i;
        while(first != 0 && end != len-1 && s.charAt(first-1) == s.charAt(end+1)) {
            first--;
            end++;
        }
        if(lmax < end - first + 1) {
            lmax = end - first + 1;
            lpos = first
        }
    }
    return s.substring(lpos, lpos + lmax);
};
var s = "nmngaowrbsssvihklwmuqshcddwlxrywrlwtennwfvrevgvhsvgeccfulmuvrcksdmgeqrblnlwoepefhcwhmgyvgcoyyygrmttyfycxwbqktpurlcfhzlakhmrddsydgygganpmaglaxyhfwjusukzcnakznygqplngnkhcowavxoiwrfycxwdkxqfcjqwyqutcpyedbnuogedwobsktgioqdczxhikjrbkmqspnxcpngfdwdaboscqbkwforihzqdcppxjksiujfvlpdjryewaxgmdgigvxdlstxwngtbdrrkfudjinzyxbdmkautclvvyguekuzwwetmsxittgtxbnvvrgasvnlogdiepltweaehubwelznidltzlbzdsrxmhjpkmylnwkdsxnpkplkdzywioluaqguowtbaoqzqgjfewphqcvlnwlojbxgomvxxkhwwykawegxubjiobizicuxzeafgautefsurgjlbhcfevqzsbhwxycrcaibdsgluczcuewzqupakbzmcvzsfodbmgtugnihyhqkvyeboqhqldifbxuaxqzxtyejoswikbzpsvzkxcndgeyvfnyrfbkhlalzpqjueibnodamgpnxlkvwvliouvejcpnakllfxepldfmdzszagkyhdgqqbkb"
var newTime = new Date()
console.log(longestPalindrome(s))
console.log(new Date() - newTime)
var otherTime = new Date()
console.log(longestPalindrome2(s))
console.log(new Date() - otherTime)
// console.log(s.lastIndexOf('a',3))