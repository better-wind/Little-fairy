const queen = n => {
  let record = [];
  const showQueen = record => {
    console.log('==='.repeat(n));
    for (let i = 0; i< n; i++) {
      let line = ''
      for (let j = 0; j< n; j++){
        line += record[i] === j+1 ? ' A ' : ' * '
      }
      console.log(line);
    }
    console.log('==='.repeat(n));
  }
  const check = (record, n) => {
    for(var i = 0; i <= n - 1; i++) {
      if((Math.abs(record[i] - record[n]) == n - i) || (record[i] == record[n])) {
        return false;
      }
    }
    return true;
  }
  const process = k => {
    if (k > n) {
      showQueen(record);
    } else {
      for (let i = 1; i <= n; i++) {
        record[k - 1] = i;
        // console.log(`第${k}个 试一下 ${i}, ${check(record, k-1) ? '可以' : '不行' }`, record, );
        if (check(record, k-1)) {
          // console.log('new process');
          process(k + 1);
        }
      }
    }
  }
  process(1);
}
queen(5);



