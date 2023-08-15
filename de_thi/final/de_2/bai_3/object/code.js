let table = document.querySelector('table');
let tr = document.createElement('tr');
let td = document.createElement('td');
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');

table.setAttribute('border', '1');

table.appendChild(tr);
tr.appendChild(th1);
th1.textContent = 'ma san pham';

tr.appendChild(th2);
th2.textContent = 'ten san pham';

tr.appendChild(th3);
th3.textContent = 'gia san pham';

class SanPham {
	constructor(ma, ten, gia) {
		this.ma = ma;
		this.ten = ten;
		this.gia = gia;
	}
}

let num = +prompt('Nhap so luong san pham');
let pros = new Array(num);

for (let i = 0; i < pros.length; i++) {
	ma = prompt('nhap ma sp ' + (i + 1));
	ten = prompt('nhap ten sp ' + (i + 1));
	gia = prompt('nhap gia sp ' + (i + 1));

	sp = new SanPham(ma, ten, gia);
	pros[i] = sp;
}

for (let i = 0; i < pros.length; i++) {
	let tr = document.createElement('tr');
	let tdMa = document.createElement('td');
	let tdTen = document.createElement('td');
	let tdGia = document.createElement('td');
	let tdButton = document.createElement('td');
	let button = document.createElement('button');

	tdMa.textContent = pros[i].ma;
	tdTen.textContent = pros[i].ten;
	tdGia.textContent = pros[i].gia;

	table.appendChild(tr);
	tr.appendChild(tdMa);
	tr.appendChild(tdTen);
	tr.appendChild(tdGia);
	tr.appendChild(tdButton);
	tdButton.appendChild(button); 
	button.textContent = 'click me';
}