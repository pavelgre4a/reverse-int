module.exports = function reverse (n) {
    let output = '';
    n = n.toString();
    

    for (let i = (n.length - 1); i >= 0 && i <= n.length; i--) {
        if (n.charAt(i) == '-') {

        } else {
        output = output + n.charAt(i)

        }
    }
    return output
}
