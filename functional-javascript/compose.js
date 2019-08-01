
const compose = (...f) => a => {
  let r = a;
  let len = f.length - 1;
  for (let i = len; i > -1; i--) {
    r = f[i](r);
  }
  return r;
}
const f = x => x - 1;
const g = x => x + 2;
const h = x => x * 3;
const com = compose(h, g, f);

console.log(compose(h, g, compose(f))(6));


console.log(com(6), (6-1+2)*3);

