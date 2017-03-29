## Little-fairy基础练习

> 1.输出是什么？why？

```javascript
var z = 10;
function foo(){
    console.log(z);
}
(function(funArg){
    var z = 20;
    funArg();
})(foo);
```

> 2.输出什么？why？

```javascript
var data = [];
    for(var k = 0; k < 3; k++){
            data[k] = function(){
                console.log(k);
            };
    }
    data[0]();
    data[1]();
    data[2]();
```

> 3.输出什么？why？

```javascript
function fun(n,o){
            console.log(o)
            return{
                fun:function(m){
                    return fun(m,n);
                }
            };
    }
    var a = fun(0);
    a.fun(1);
    a.fun(2);
    a.fun(3);
    var b = fun(0).fun(1).fun(2).fun(3);

    var c = fun(0).fun(1);
    c.fun(2);
    c.fun(3);
```

> 4.输出什么？why？

```javascript
var a = 100;
    function testResult(){
            var b = 2 * a;
            var a = 200;
            var c = a / 2;
            console.log(b);
            console.log(c);
    }
    testResult();
```

> 5.输出什么？why？

```javascript
var myObject = {
            foo: "bar",
            func: function(){
                var self = this;
                console.log('outer func : this.foo' + this.foo);
                console.log('outer func : self.foo' + self.foo);
                (function(){
                    console.log('inner func : this.foo' + this.foo);
                    console.log('inner func : self.foo' + self.foo);
                })();
            }
    };
    myObject.func();
```

> 6.输出什么？why？

```javascript
var test = (function(a){
            this.a = a;
            return function(b){
                return this.a + b;
            }
    }(function(a,b){
            return a;
    }(1,2)));
    console.log(test(1));
```

> 7.输出什么？why

```javascript
if(!("a" in window)){
        var a = 1;
    }
    console.log(a);
 //https://zhuanlan.zhihu.com/p/25863288
```

> 8.实现以下功能

```javascript
alert('Test');
//页面弹出一个对话框，显示Test。1s后隐藏。
```

> 9.实现以下功能

```javascript
function foo(){

}
//实现方法 foo
//传入一个数字数组[8,9,8,5,3,9,20,34,34,20,1,3,3]
//返回一个去重并且从下到大排好序的数组
```

> 10.实现以下功能

```javascript
//用至少3种方法实现，两个数组的去重合并

```
> 11.实现以下功能

```
//正则的使用
//实现一个方法,判断输入的数字是否是电话号码(11位手机)
//实现一个方法,判断输入的数字是否是电话号码(11位手机,010-82888888,0575-82888888,82888888)
```

> 12.实现以下功能

```
//实现一个方法,传入字符串,在页面上打印这句话,
//并且自动识别 链接,点击可跳转

```
