let list = [
  {
    id: 1,
  },
  {
    id: 2,
  }
]

const mapType = (type = '') => (item, index) => {
  const params = { ...item }
  params.banner_id = type + '~' + item.id + '~' + index;
  return params;
}

const goods = list.map(mapType('goods'));
const newGoods = list.map(mapType('new-goods'));
console.log(goods)
console.log(newGoods)

