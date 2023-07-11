/*Bài 1: viết chương trình thực hiện các yêu cầu sau:
a) Định nghĩa kiểu dữ liệu phân số. Kiểu dữ liệu này có 2 properties là tử số và mẫu số
b) In ra phân số dạng: tử/mẫu. Ví dụ: 4/5
c) Nghịch đảo phân số. VÍ dụ: 4/5  5/4
d) Định nghĩa phép cộng, trừ, nhân, chia 2 phân số. Kết quả trả về là phân số mới.
e) Tối giản phân số. Ví dụ: 3/9  1/3.
*/

//a) Định nghĩa kiểu dữ liệu phân số. Kiểu dữ liệu này có 2 properties là tử số và mẫu số.
class PhanSo {
    constructor(tuSo, mauSo) {
        this.tuSo = tuSo;
        this.mauSo = mauSo;
    }

    //b) In ra phân số dạng: tử/mẫu.
    toString() {
        return `${this.tuSo}/${this.mauSo}`;
    }

    //c) Nghịch đảo phân số.
    nghichDao() {
        return new PhanSo(this.mauSo, this.tuSo);
    }

    //d) Định nghĩa phép cộng, trừ, nhân, chia 2 phân số. Kết quả trả về là phân số mới.
    cong(PhanSoHai) {
        const tuso = this.tuSo * PhanSoHai.mauSo + PhanSoHai.tuSo * this.mauSo;
        const mauso = this.mauSo * PhanSoHai.mauSo;
        return new PhanSo(tuso, mauso);
    }

    tru(PhanSoHai) {
        const tuso = this.tuSo * PhanSoHai.mauSo - PhanSoHai.tuSo * this.mauSo;
        const mauso = this.mauSo * PhanSoHai.mauSo;
        return new PhanSo(tuso, mauso);
    }

    nhan(PhanSoHai) {
        const tuso = this.tuSo * PhanSoHai.tuSo;
        const mauso = this.mauSo * PhanSoHai.mauSo;
        return new PhanSo(tuso, mauso);
    }

    chia(PhanSoHai) {
        const tuso = this.tuSo * PhanSoHai.mauSo;
        const mauso = this.mauSo * PhanSoHai.tuSo;
        return new PhanSo(tuso, mauso);
    }

    //e) Tối giản phân số.
    UCLN(a, b) {
        if (b === 0) {
            return a;
        }
        //Thuật toán Euclipse (tìm ước chung lớn nhất bằng cách chia lấy dư).
        return this.UCLN(b, a % b);
    }

    toiGian() {
        const ucln = this.UCLN(this.tuSo, this.mauSo);
        const tuso = this.tuSo / ucln;
        const mauso = this.mauSo / ucln;
        return new PhanSo(tuso, mauso);
    }
}

const tuSo = +prompt('Nhập tử số');
const mauSo = +prompt('Nhập mẫu số');
const phanSo = new PhanSo(tuSo, mauSo);

console.log(`Phân số: ${phanSo.toString()}`);
console.log(`Nghịch đảo: ${phanSo.nghichDao().toString()}`);

const tuSo2 = +prompt('Nhập tử số phân số thứ 2');
const mauSo2 = +prompt('Nhập mẫu số phân số thứ 2');
const phanSo2 = new PhanSo(tuSo2, mauSo2);

console.log(`${phanSo.tuSo}/${phanSo.mauSo} + ${phanSo2.tuSo}/${phanSo2.mauSo} = ${phanSo.cong(phanSo2).toString()}`);
console.log(`${phanSo.tuSo}/${phanSo.mauSo} - ${phanSo2.tuSo}/${phanSo2.mauSo} = ${phanSo.tru(phanSo2).toString()}`);
console.log(`${phanSo.tuSo}/${phanSo.mauSo} * ${phanSo2.tuSo}/${phanSo2.mauSo} = ${phanSo.nhan(phanSo2).toString()}`);
console.log(`${phanSo.tuSo}/${phanSo.mauSo} / ${phanSo2.tuSo}/${phanSo2.mauSo} = ${phanSo.chia(phanSo2).toString()}`);

console.log(`Phân số thứ 1 tối giản: ${phanSo.toiGian()}`);





/*Bài 2: viết chương trình quản lý giỏ hàng như sau.
a) Định nghĩa 2 kiểu dữ liệu.
- Item (món hàng): có các property: ID, name, giá, số lượng
- cart (giỏ hàng): có các property: mảng các item, tổng tiền
b) In thông tin món hàng với định dạng: ID/name/giá/số lượng. Ví dụ: UI198/Chuột razor/1000/8
c) In thông tin của giỏ hàng như sau:
- Mỗi món hàng in 1 dòng riêng. In thông tin món hàng như câu trên.
- Dòng cuối:  “total: tổng tiền”. Ví dụ: total: 9000
d) Giỏ hàng có thể thêm món hàng mới. Mỗi lần thêm, cập nhật giá trị tổng tiền.
e) Tìm kiếm món hàng dựa vào ID/tên món hàng (viết 2 hàm). Nếu tìm không ra thì trả về null. Nếu tìm ra, trả về giá trị index.
f) Xóa món hàng (dựa trên ID/name) khỏi giỏ hàng. Mỗi lần xóa, cập nhật giá trị tổng tiền.
*/

/*a) Định nghĩa 2 kiểu dữ liệu.
- Item (món hàng): có các property: ID, name, giá, số lượng
- cart (giỏ hàng): có các property: mảng các item, tổng tiền*/
class Item {
    constructor(ID, name, gia, soLuong) {
        this.ID = ID;
        this.name = name;
        this.gia = gia;
        this.soLuong = soLuong;
    }
}

class Cart {
    constructor() {
        this.items = [];
        this.total = 0;
    }

    //b) In thông tin món hàng với định dạng: ID/name/giá/số lượng.
    inMonHang(item) {
        //padEnd (chèn thêm kí tự khoảng trắng vào sau để đảm bảo đủ kí tự), tương tự với padStart, cả 2 chỉ áp dụng với kiểu dữ liệu string.
        console.log("%s %s %s %s", item.ID.padEnd(10), item.name.padEnd(20), item.gia.toString().padEnd(20), item.soLuong.toString().padStart(5));
    }

    //c) In thông tin của giỏ hàng.
    inGioHang() {
        //duyệt giá trị của mảng nên dùng for of, duyệt chỉ số thì dùng for in.
        for (let item of this.items) {
            this.inMonHang(item);
        }
        console.log(`total: ${this.total}`);
    }

    //d) Giỏ hàng có thể thêm món hàng mới. Mỗi lần thêm, cập nhật giá trị tổng tiền.
    themHang(item) {
        this.items.push(item);
        this.total += item.gia * item.soLuong;
    }

    //e.1) Tìm kiếm món hàng dựa vào ID.
    timHangID(ID) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].ID === ID) {
                return i;
            }
        }
        //nếu đã return i thì không chạy dòng này, return không bị ghi đè.
        return null;
    }

    //e.2) Tìm kiếm món hàng dựa vào tên món hàng.
    timHangTen(name) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === name) {
                return i;
            }
        }
        return null;
    }

    //f.1) Xóa món hàng dựa vào ID.
    xoaHangID(ID) {
        const idXoa = this.timHangID(ID);
        if (idXoa !== null) {
            //hàm splice trả về kết quả là 1 mảng, do đó muốn gọi đến giá trị trong mảng phải thêm chỉ số [0].
            const itemXoa = this.items.splice(idXoa, 1)[0];
            this.total -= itemXoa.gia * itemXoa.soLuong;
        }
    }

    //f.2) Xóa món hàng dựa vào name.
    xoaHangTen(name) {
        const nameXoa = this.timHangTen(name);
        if (nameXoa !== null) {
            const itemXoa = this.items.splice(nameXoa, 1)[0];
            this.total -= itemXoa.gia * itemXoa.soLuong;
        }
    }
}

let number = +prompt('Nhập số lượng món hàng');
let cart = new Cart();

for (let i = 0; i < number; i++) {
    let ID = prompt(`Nhập ID món hàng ${i+1}`);
    let tenHang = prompt(`Nhập tên món hàng ${i+1}`);
    let gia = +prompt(`Nhập giá món hàng ${i+1}`);
    let soLuong = +prompt(`Nhập số lượng món hàng ${i+1}`);
    let monHang = new Item(ID, tenHang, gia, soLuong);
    //câu d.
    cart.themHang(monHang);
    //câu b.
    cart.inMonHang(monHang);
}

//câu c.
cart.inGioHang();

//câu e.
let ID = prompt(`Nhập ID món hàng muốn tìm kiếm`);
console.log(cart.timHangID(ID));

//câu e.
let tenHang = prompt(`Nhập tên món hàng muốn tìm kiếm`);
console.log(cart.timHangTen(tenHang));

//câu f.
let IDXoa = prompt(`Nhập ID món hàng muốn xoá`);
cart.xoaHangID(IDXoa);
cart.inGioHang();

//câu f.
let tenXoa = prompt(`Nhập tên món hàng muốn xoá`);
cart.xoaHangTen(tenXoa);
cart.inGioHang();