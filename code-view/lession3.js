const de = (fn) => {
  let timeout = null, check = true;
  return function() {
    if (!check) return;
    timeout = setTimeout(()=>{
      clearTimeout(timeout);
      check = true;
    }, 900)
    check = false;
    fn();
  }
}
const _d = de(function(){
  console.log('_d');
})
_d();
_d();
setTimeout(function(){
  _d();
}, 1000);
