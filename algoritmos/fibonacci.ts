function fib(n : number) : Array<number> {
    if (n == 1) return [0];

    let init : Array<number> = [0, 1];
    let arr : Array<number> = [0, 1];

    for (let i = 2; i < n; i++) {
        init[i] = init[i - 1] + init[i - 2];
        arr.push(init[i]);
    }

    return arr;
}

// Printing array
console.log(fib(6));
