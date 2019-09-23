let demo_1_e = {
  a: 'demo_1_a',
  b: 'demo_1_b',
  e: 'demo_1_e',
};
let demo_1_f = demo_1_e
demo_1_f.e = 'demo_1_f';

const demo = [
  {
    list:[
      {
        list:[
          {
            list:[]
          }
        ]
      }
    ]
  }
]
// demo[0].list[0].list[0].list = [1,2,3];


var  setObjLeveldata = function () {
  var a = 0;
  return function (obj, level, data) {
    if (a === level) {
      obj.list = data;
    } else {
      console.log(arguments);
      a++;
    }
  }

} ;
const setObjData = setObjLeveldata();
setObjData(demo, 3, 'xxxxxx');
console.log(demo);


var a=[1,2,3,4];
var b=a;
console.log('diyici:',b,a);
b[2]=5;
console.log('dierci',b,a)
