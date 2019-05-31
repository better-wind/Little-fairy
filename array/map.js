let goods = [
  {
    banner_id: 's.1231~goods~11111111'
  },
  {
    banner_id: 'g.1231~goods~11111111'
  }
]
var getItemBanner =
getItemBanner(goods, 'type');
var list = [
  {
  role:'admin',
  email: '666',
},
  {
    role:'admin1',
    email: '777',
  }
]
var compose = (f, g) => x => f(g(x));

var prop = p => x => x[p];

var propEq = v => p => obj =>
  prop(p)(obj) === v;

var map = f => list =>
  list.map(f);

var filter = f => list =>
  list.filter(f);

var getAdminEmails = compose(
  map(prop('email')),
  filter(propEq('admin')('role'))
);


// console.log(getAdminEmails(list));



