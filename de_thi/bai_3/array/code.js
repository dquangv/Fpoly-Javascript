let num = +prompt('Nhap so luong phan tu muon nhap vao mang');
let n = new Array(num);

for (let i = 0; i < n.length; i++) {
    n[i] = +prompt('nhap so bat ki cho phan tu ' + (i + 1));
}

function transform(elem) {
    if (elem < 5) {
        return elem * 3;
    } else {
        return elem * 2;
    }
}

let m = n.map(transform);

console.log(n);
console.log(m);