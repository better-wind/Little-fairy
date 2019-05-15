const link = 'https://b.yzcdn.cn/wsc-h5-user/js/showcase-goods-recommend_bea38493d9d4ce2e93cc.js?ss';
const reg = /b.yzcdn.cn\/wsc-h5-user\/([^_]+)(_.+)?\.(css|js|map)(\?.+)?$/

// console.log(link.match(reg))

const link2 = 'https://b.yzcdn.cn/wsc-h5-ump/js/showcase-goods_34e078cee18dfbec057d.js';
const reg2 = /([^:]*):\/\/[^\.]*\.yzcdn\.cn\/wsc-h5-ump\/(.*)_([^_]+)*(\.js|css)$/
console.log(link2.match(reg2))
