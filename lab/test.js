/*
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
*/

/*
let num = +prompt('Number');
let arr = new Array(num);
for (let i = 0; i < num; i++) {
    arr[i] = +prompt('num ', i + 1);
}

//sắp xếp tăng dần
console.log(arr.sort((a, b) => a - b));

//so sánh tích 3 giá trị cuối với tích 2 giá trị đầu và giá trị cuối, tích nào lớn hơn thì lấy tích đó 
console.log(arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3] >= arr[arr.length - 1] * arr[0] * arr[1] ? `${arr[arr.length - 1]} * ${arr[arr.length - 2]} * ${arr[arr.length - 3]} = ${arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]}` : `${arr[arr.length - 1]} * ${arr[0]} * ${arr[1]} = ${arr[arr.length - 1] * arr[0] * arr[1]}`);
*/

let num = +prompt('Number of arr');
let arr = new Array(num);

for (let i = 0; i < num; i++) {
    arr[i] = +prompt(`num ${i + 1}`);
}

console.log(arr);

/*
//cau a
function foo(val, idx, arr) {
    console.log(val);
    console.log(idx);
}

arr.forEach(foo);
*/

/*
//cau b
function foo(val, idx, arr) {
    if (val % 3 === 0) {
        console.log(val)
    }
}

arr.forEach(foo);
*/

/*
//cau c
function foo(val, idx, arr) {
    if (idx % 2 === 1) {
        arr[idx] *= 2;
    }
}

arr.forEach(foo);
*/

/*
//cau d
function foo(val, idx, arr) {
    return val + 1;
}

let newArr = arr.map(foo);
console.log(newArr);
*/

/*
//cau e
function foo(val, idx, arr) {
    return val + this;
}

let K = +prompt('K');
let newArr = arr.map(foo, K);
console.log(K);
console.log(newArr);
*/

/*
//cau f
function foo(val, idx, arr) {
    if (idx % 2 === 0) {
        return val *= 2;
    }
    return val *= 3;
}
let newArr = arr.map(foo);
console.log(newArr);
*/

/*
//cau g
function foo(val, idx, arr) {
    return val > 0;
}
let newArr = arr.filter(foo);
console.log(newArr);
*/

/*
//cau h
function foo(val, idx, arr) {
    let count = 1;
    if (val === 1 || val === 3 || val === 5 || val === 7) {
        return true;
    } else if (val === 2 || val === 4 || val === 6) {
        return false;
    }
    for (let i = 2; i < val / 2; i++) {
        if (val % i === 0) {
            return false;
        }
    }
    if (count === 1) {
        return true;
    }
}

let newArr = arr.filter(foo);
console.log(newArr);
*/

/*
//cau i
function foo(val, idx, arr) {
    return val >= this;
}
let K = +prompt('K');
console.log(K);
let newArr = arr.filter(foo, K);
console.log(newArr);
*/

/*
//cau j
function foo(init, val, idx, arr) {
    return init + val;
}

let newArr = arr.reduce(foo);
console.log(newArr);

function bar(init, val, idx, arr) {
    return init * val;
}

let newArr = arr.reduce(bar, 1);
console.log(newArr);
*/

//cau k
function foo(init, val, idx, arr) {
    let count = 1;
    if (val === 1 || val === 3 || val === 5 || val === 7) {
        return init + val;
    } else if (val === 2 || val === 4 || val === 6) {
        return val;
    }
    for (let i = 2; i < val / 2; i++) {
        if (val % i === 0) {
            return val;
        }
    }
    if (count === 1) {
        return init + val;
    }
}

let newArr = arr.reduce(foo, 0);
console.log(newArr);