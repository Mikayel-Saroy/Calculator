let n = 0;
let s = undefined;
let a = 0;
let point = false;
let pointMark = 10;
function num(x) {
    if (point === false) {
        if (n === undefined) {
            n = x;
        }
        else {
            if (x === 'double') {
                n *= 100;
            } else {
                n = (n * 10) + x;
            }
        }
        document.getElementById('i').innerHTML = n;
    }
    else if (point === true) {
        n = n + (x / pointMark);
        pointMark *= 10;
        document.getElementById('i').innerHTML = n;
    }
}
function sign(x) {
    s = x;
    point = false;
    pointMark = 10;
    if (a === 0) {
        a = n;
        n = 0;
    } else {
        n = 0;
    }
}
function go() {
    if (a === 0) {
        a = n;
        document.getElementById('i').innerHTML = a;
    }
    else {
        action();
    }
}
function action() {
    if (s === '+') a = a + n;
    if (s === '-') a = a - n;
    if (s === '*') a = a * n;
    if (s === '/') a = a / n;
    document.getElementById('i').innerHTML = a;
}
function reset() {
    n = 0;
    a = 0;
    point = false;
    pointMark = 10;
    document.getElementById('i').innerHTML = n;
}
function pointF() {
    point = true;
    document.getElementById('i').innerHTML = n + '.';
}
function root() {
    if (a === 0) {
        n = Math.sqrt(n);
    } else {
        n = Math.sqrt(a);
    }
    document.getElementById('i').innerHTML = n;
}
function negative() {
    if (n !== 0) {
        n = -n;
        document.getElementById('i').innerHTML = n;
    } else {
        a = -a;
        document.getElementById('i').innerHTML = a;
    }
}