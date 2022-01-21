function fib(n) {
    if (n == 1)
        return [0];
    var init = [0, 1];
    var arr = [0, 1];
    for (var i = 2; i < n; i++) {
        init[i] = init[i - 1] + init[i - 2];
        arr.push(init[i]);
    }
    return arr;
}
// Array print
console.log(fib(6));
