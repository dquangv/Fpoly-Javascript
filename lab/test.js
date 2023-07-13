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


let num = +prompt('Number');
let arr = new Array(num);
for (let i = 0; i < num; i++) {
    arr[i] = +prompt('num ', i + 1);
}

/*
// sắp xếp tăng dần
console.log(arr.sort((a, b) => a - b));

console.log(arr);

// so sánh giá trị đầu và cuối, nếu cuối lớn hơn
if (-arr[0] <= arr[length - 1]) {

    // thì so sánh tiếp tích cặp ĐẦU và tích cặp KẾ CUỐI, cặp nào lớn hơn thì lấy cặp đó với giá trị cuối 
    if (arr[0] * arr[1] <= arr[length - 2] * arr[length - 3]) {
        console.log(`${arr[arr.length - 1]} * ${arr[arr.length - 2]} * ${arr[arr.length - 3]} = ${arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]}`);
    } else {
        console.log(`${arr[arr.length - 1]} * ${arr[0]} * ${arr[1]} = ${arr[arr.length - 1] * arr[0] * arr[1]}`);
    }

// nếu đầu lớn hơn thì so sánh tích cặp ĐẦU và tích cặp CUỐI, cặp cuối lớn hơn thì lấy 3 giá trị cuối, cặp đầu lớn hơn thì lấy cặp đầu với giá trị cuối
} else {
    if (arr[0] * arr[1] <= arr[arr.length - 1] * arr[arr.length - 2]) {
        console.log(`${arr[arr.length - 1]} * ${arr[arr.length - 2]} * ${arr[arr.length - 3]} = ${arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]}`);
    } else {
        console.log(`${arr[arr.length - 1]} * ${arr[0]} * ${arr[1]} = ${arr[arr.length - 1] * arr[0] * arr[1]}`);
    }
}
*/

//sắp xếp tăng dần
console.log(arr.sort((a, b) => a - b));

//so sánh tích 3 giá trị cuối với tích 2 giá trị đầu và giá trị cuối, tích nào lớn hơn thì lấy tích đó 
console.log(arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3] >= arr[arr.length - 1] * arr[0] * arr[1] ? `${arr[arr.length - 1]} * ${arr[arr.length - 2]} * ${arr[arr.length - 3]} = ${arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]}` : `${arr[arr.length - 1]} * ${arr[0]} * ${arr[1]} = ${arr[arr.length - 1] * arr[0] * arr[1]}`);