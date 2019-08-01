/**
 * 一个强密码应满足以下所有条件：
 *
 * 由至少6个，至多20个字符组成。
 * 至少包含一个小写字母，一个大写字母，和一个数字。
 * 同一字符不能连续出现三次 (比如 "...aaa..." 是不允许的, 但是 "...aa...a..." 是可以的)。
 * 编写函数 strongPasswordChecker(s)，s 代表输入字符串，如果 s 已经符合强密码条件，则返回0；否则返回要将 s 修改为满足强密码条件的字符串所需要进行修改的最小步数。
 * 插入、删除、替换任一字符都算作一次修改。
 * @param s
 */
// 这是第二个例子
const rules = [
  s => {
    let check = false;
    let path = 0;
    if (s.length >=6 && s.length <=20) {
      check = true;
    } else {
      path = Math.min(Math.abs(s.length - 6), Math.abs(s.length - 20));
    }
    return {
      check,
      path,
      dp: path,
      priority: 20,
      type: s.length < 6 ? 'add' : s.length > 20 ? 'del' : '',
    }
  },
  s => {
    const check = /\d{1}/.test(s);
    return {
      check,
      path: Number(!check),
      dp: Number(!check),
      priority: 10,
      type: 'add',
    }
  },
  s => {
    const check = /[A-Z]{1}/.test(s);
    return {
      check,
      path: Number(!check),
      dp: Number(!check),
      priority: 10,
      type: 'add',
    }
  },
  s => {
    const check = /[a-z]{1}/.test(s);
    return {
      check,
      path: Number(!check),
      dp: Number(!check),
      priority: 10,
      type: 'add',
    }
  },
  s => {
    const check = s.match(/(.)\1{1,}/g) || [];
    const path = check.reduce((path, item) => {
      if (item.length > 2) {
        let _path = Math.floor(item.length/3);
        path += _path;
      }
      return path;
    } , 0);
    return {
      check: path === 0,
      path,
      dp: path,
      priority: 30,
      type: 'all',
    }
  },
]

var strongPasswordChecker = function(s) {
  const result = rules.reduce((_c, rule) => {
    let params = rule(s);
    _c.check = params.check && _c.check;
    if (!params.check) _c.list.push(params);
    return _c;
  }, { check: true, list: []});

  if (result.check) return 0;
  const list = result.list.sort((a, b)=> a.priority - b.priority);
  let map = {};
  list.forEach(item => {
    if (!map[item.priority]) {
      map[item.priority] = item.path;
    } else {
      map[item.priority] += item.path;
    }

  });
  let path = 0;
  console.log(map);
  Object.keys(map).forEach(item => {
    path = Math.max(map[item], path)
  })
  console.log(path);
  return path;
};

// strongPasswordChecker('1010101010aaaB10101010'); // 2
strongPasswordChecker('ABABABABABABABABABAB1'); // 2
// strongPasswordChecker('abababababababababaaa'); // 3
// strongPasswordChecker('aaaaaaaaaaaaaaaaaaaaa'); // 7
// strongPasswordChecker('1111111111'); // 3
strongPasswordChecker(''); // 6
