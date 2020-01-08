### @babel/plugin-transform-runtime

会 把 help函数 转成 引用 @babel/runtime/helpers

```javascript

// use
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Person = function Person() {
  (0, _classCallCheck2.default)(this, Person);
};

// not use
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Person = function Person() {
  _classCallCheck(this, Person);
};
```
