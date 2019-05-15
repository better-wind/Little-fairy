var fs = require('fs');
fs.readFile('./t.txt', 'utf-8', function(err, data) {
  // 读取文件失败/错误
  if (err) {
    throw err;
  }
  // 读取文件成功
  var _s = data.toString();
  var reg = /(第.+[卷章][\s\n].*)/g;

  console.log(_s.match(reg))
});

