var a = []

module.exports = {
  getA() {
    return a;
  },
  setA(item) {
    a.push(item)
  }
}
