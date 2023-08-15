class SanPham {
	ma = "";
	ten = "";
	gia = 0;
    constructor(ma, ten, gia) {
        this.ma = ma;
        this.ten = ten;
        this.gia = gia;
    }
}

// Tạo danh sách sản phẩm
const danhSachSanPham = [
    new SanPham("SP001", "Sản phẩm 1", 100000),
    new SanPham("SP002", "Sản phẩm 2", 150000),
    new SanPham("SP003", "Sản phẩm 3", 200000),
    new SanPham("SP004", "Sản phẩm 4", 120000),
    new SanPham("SP005", "Sản phẩm 5", 180000)
];

// Hiển thị danh sách sản phẩm trong bảng trên trang web
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Tạo hàng tiêu đề
const headerRow = document.createElement("tr");
const headerColumns = ["Mã sản phẩm", "Tên sản phẩm", "Giá tiền", "Hình ảnh"];
headerColumns.forEach(columnText => {
    const th = document.createElement("th");
    th.textContent = columnText;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

// Tạo các hàng chứa thông tin sản phẩm
danhSachSanPham.forEach(sanPham => {
    const row = document.createElement("tr");
    
    const maCell = document.createElement("td");
    maCell.textContent = sanPham.ma;
    row.appendChild(maCell);
    
    const tenCell = document.createElement("td");
    tenCell.textContent = sanPham.ten;
    row.appendChild(tenCell);
    
    const giaCell = document.createElement("td");
    giaCell.textContent = sanPham.gia.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
    row.appendChild(giaCell);
    
    const hinhCell = document.createElement("td");
    const hinh = document.createElement("img");
    hinh.src = "mieng_lot_chuot.jpg";
    hinhCell.appendChild(hinh);
    row.appendChild(hinhCell);
    
    tbody.appendChild(row);
});
table.appendChild(tbody);

// Hiển thị bảng trên trang web
const container = document.getElementById("container");
container.appendChild(table);
