// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
//
// 注意：答案中不可以包含重复的三元组。
//
// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
//
// 满足要求的三元组集合为：
// [
//     [-1, 0, 1],
//     [-1, -1, 2]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(!nums) return []
    const _max = Math.max.apply(null,nums)
    const _min = Math.min.apply(null,nums)
    const _hashMap = {}
    const _result = []
    const _bResult = []
    const _bResultMap = {}
    function setMap(key,value){
        var _strValue = value.sort((a,b)=>a-b).join(',')
        if(_hashMap[key]){
        // && !_hashMap[key].includes(_strValue)
        //     if(key == 2){
        //         console.log(_hashMap[key],_strValue,_hashMap[key].includes(_strValue))
        //     }
            if(!_hashMap[key].includes(_strValue)){
                _hashMap[key].push(_strValue)
            }



        } else {
            _hashMap[key+''] = [_strValue]
        }
    }
    nums.forEach((item,index)=>{
      nums.forEach((_item,_index)=>{
          if(index != _index){
              var _num = item + _item
              var _res = 0 - _num
              if(_num > 0){
                  if(_num+_min <= 0){
                      setMap(_res,[index,_index])
                  }
              } else {
                  if(_num+_max >= 0){
                      setMap(_res,[index,_index])
                  }
              }
          }

      })
    })

    nums.forEach((item,index)=>{
        if(_hashMap[item]){
            var _arr = _hashMap[item]
            _arr.forEach((_item)=>{
                var _arrItem = _item.split(',')
                if(!_arrItem.includes(index+'')){
                    _arrItem.push(index)
                    var _strItem = _arrItem.sort((a,b)=>a-b).join(',')
                    if(!_result.includes(_strItem)){
                        _result.push(_strItem)
                    }
                }
            })
        }
    })


    _result.map((item)=>{
        var _item = item.split(',')
        var _nItem = []
        _item.forEach((sub)=>{
            _nItem.push(nums[sub])
        })
        var _nsItem = _nItem.sort((a,b)=>a-b).join(',')
        if(!_bResultMap[_nsItem]){
            _bResult.push(_nItem)
            _bResultMap[_nsItem] = true
        }
        _bResult.push()
    })
    console.log(_bResult)
    return _bResult
};
var nums = [-1,-2,-3,4,1,3,0,3,-2,1,-2,2,-1,1,-5,4,-3]
var nums = [-13,11,11,0,-5,-14,12,-11,-11,-14,-3,0,-3,12,-1,-9,-5,-13,9,-7,-2,9,-1,4,-6,-13,-7,10,10,9,7,13,5,4,-2,7,5,-13,11,10,-12,-14,-5,-8,13,2,-2,-14,4,-8,-6,-13,9,8,6,10,2,6,5,-10,0,-11,-12,12,8,-7,-4,-9,-13,-7,8,12,-14,10,-10,14,-3,3,-15,-14,3,-14,10,-11,1,1,14,-11,14,4,-6,-1,0,-11,-12,-14,-11,0,14,-9,0,7,-12,1,-6]
// var nums = [-2,0,2,-5,4]
// n * (n-1) * (n-2)
threeSum(nums)