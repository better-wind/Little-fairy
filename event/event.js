var list = []

var A= (value) => {
    list.map((i) => {
        i(value)
    })
}

var B = (value) => {
    console.log(value)
}
list.push(B);

A('1');

