module.exports = function reverse (n) {
  let a = String(n).split("")
    if(a[0] === "-") {
        a.shift()
    } else if (a[a.length-1] === "0") {
        a.pop()
    }
    return Number(a.reverse().join(""))
}
