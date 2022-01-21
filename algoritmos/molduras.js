function repeatString(str, n) {
    if (n < 0) return "";
    if (n === 1) return str;
    else return str + repeatString(str, n - 1);
}

function drawFrame(cols, rows) {
    for (let r = 0; r < rows; r++) {
        if (r == 0 || r == rows - 1) {
            let str = "+";
            str += repeatString("-", cols - 2);
            if (cols >= 3) str += "+";
            console.log(str);
        } else {
            let str = "-";
            str += repeatString(" ", cols - 2);
            if (cols >= 3) str += "-";
            console.log(str);
        }
    }
}

// drawFrame(1, 3);
// drawFrame(9, 6);