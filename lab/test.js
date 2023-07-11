function input() {
    let tuso = +prompt('tu so');
    let mauso = +prompt('mauso');
    return [tuso, mauso];
}

function toString(a, b) {
    return `${a}/${b}`;
}


function nghichDao(a, b) {
    return toString(b, a);
}

function cong(a, b, c, d) {
    congtu = a * d + b * c;
    congmau = b * d;
    return toString(congtu, congmau);
}

function ucln(a, b) {
    if (b === 0) {
        return a;
    }
    return ucln(b, a % b);
}

function toiGian(a, b) {
    tu = a / ucln(a, b);
    mau = b / ucln(b, a);
    return toString(tu, mau);
}

let [a, b] = input();
let [c, d] = input();
console.log(toString(a, b));
console.log(nghichDao(a, b));
console.log(cong(a, b, c, d));
console.log(toiGian(a, b));
