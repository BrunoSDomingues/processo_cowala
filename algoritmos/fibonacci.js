function fib(n) {
    if (n == 1) return [0];

    let init = [0, 1];
    let arr = [0, 1];

    for (let i = 2; i < n; i++) {
        init[i] = init[i - 1] + init[i - 2];
        arr.push(init[i]);
    }

    return arr;
}

// Executar via terminal
// var num = parseInt(process.argv.slice(2));

// Print do array
// console.log(fib(num));