const { Readable } = require('stream');
const fs = require('fs');
const inStream = new Readable();

const item = {
  "activity_price": "1.00",
  "alias": "3nlhvbhf8oxtu",
  "buy_url": "",
  "buy_way": 1,
  "goods_type": 0,
  "height": "500",
  "id": 441917002,
  "image_url": "http://img.yzcdn.cn/upload_files/2018/11/05/FiL3PnboUXZdGzzw52ahX0E9ToYr.jpg",
  "is_virtual": 0,
  "origin": "",
  "picture": [
    {
      "height": 500,
      "id": 1223995412,
      "url": "http://img.yzcdn.cn/upload_files/2018/11/05/FiL3PnboUXZdGzzw52ahX0E9ToYr.jpg",
      "width": 500
    }
  ],
  "postage": 1,
  "pre_sale": false,
  "price": "1.00",
  "sold_status": 1,
  "start_sold_time": 0,
  "sub_title": "",
  "title": "wq",
  "total_sold_num": 71,
  "width": "500",
  "url": "https://shop16911610.youzan.com/v2/goods/3nlhvbhf8oxtu"
}

const list = [];
let size = 8500;
while(size--) {
  list.push(item);
}
const file = fs.createWriteStream('./big.text');

inStream.push(JSON.stringify(list));
inStream.push(null);
inStream.pipe(file);
setTimeout(()=>{
  const st = fs.statSync('./big.text');
  console.log(st.size / 1024 / 1024)
}, 300)

