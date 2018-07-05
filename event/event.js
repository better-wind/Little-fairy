var list = []

var A= (value) => {
    list.map((i) => {
        i(value)
    })
    // for (var i in list) {
    //     list[i](value);
    // }
}

var B = (value) => {
    console.log(value)
}
list.push(B);

function X() {
}

A('1');

