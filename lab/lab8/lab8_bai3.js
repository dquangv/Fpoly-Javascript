//tạo lớp khung
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

//bộ dữ liệu cho khung
let productsData = [
    new Product("iPhone9", 2700),
    new Product("Samsung Star", 1500),
    new Product("Nokia 2020", 1200),
    new Product("Sony Xperia", 1700)
];

//tạo bảng cho html bằng js
let body = document.querySelector("body");
body.innerHTML = `
<h1>Danh mục hàng hoá</h1>
    <table id="productTable" border="1">
        <thead>
            <tr>
                <th>Tên sản phẩm</th>
                <th>Giá tiền</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <h1>Giỏ hàng của bạn</h1>
    <table id="cartTable" border="1">
        <thead>
            <tr>
                <th>Tên sản phẩm</th>
                <th>Giá tiền</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        </tbody>
        <tfoot>
            <tr>
                <td><strong>Tổng số tiền:</strong></td>
                <td id="totalAmount">$0.00</td>
                <td></td>
            </tr>
        </tfoot>
    </table>
`;

// truy xuất đến phần tbody của bảng danh mục
let productTable = document.querySelector('#productTable').querySelector('tbody');

// trả về đoạn mã dưới cho từng phần tử trong mảng productsData
let product = productsData.map(product => {
    return `
    <tr>
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td><button class="add">Thêm</button></td>
    </tr>
`});

// nối các chuỗi trong mảng mới xử lý và nhét vào tbody trong bảng của html
productTable.innerHTML = product.join('');

// thêm sự kiện khi click vào từng nút "thêm"
let addButtons = document.querySelectorAll('.add');
for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', getInfoProduct);
};

function getInfoProduct(event) {
    // button "thêm"
    let addButton = event.target;

    // tag <tr> của dòng click nút "thêm"
    let rowProduct = addButton.parentNode.parentNode;

    // tên của sp
    let productName = rowProduct.querySelectorAll('td')[0].textContent;

    // giá của sp
    let productPrice = parseFloat(rowProduct.querySelectorAll('td')[1].textContent.split('$')[1]);

    // cộng vào tổng tiền
    updateTotalAmount(productPrice);

    //thêm vào giỏ hàng
    addToCart(productName, productPrice);
}

// truy xuất đến bảng giỏ hàng
let cartTable = document.querySelector('#cartTable');

function addToCart(productName, productPrice) {
    // tạo dòng để chứa thông tin sản phẩm
    let rowProduct = document.createElement('tr');

    // thêm thông tin vào dòng đó
    rowProduct.innerHTML = `
        <td>${productName}</td>
        <td>$${productPrice}</td>
        <td><button class="delete">Xoá</button></td>
    `;

    // thêm dòng đó vào bảng giỏ hàng
    cartTable.appendChild(rowProduct);

    // truy xuất và thêm sự kiện cho nút xoá
    let delButton = rowProduct.querySelector('.delete');
    delButton.addEventListener('click', deleteProduct);
}

function deleteProduct(event) {
    // button "xoá"
    let delButton = event.target;

    // tag <tr> của dòng click nút "xoá"
    let rowProduct = delButton.parentNode.parentNode;

    // giá của sản phẩm click nút "xoá"
    let productPrice = parseFloat(rowProduct.querySelectorAll('td')[1].textContent.split('$')[1]);

    // xoá sản phẩm
    rowProduct.remove();

    // trừ vào tổng tiền
    updateTotalAmount(-productPrice);
}

function updateTotalAmount(price) {
    // truy xuất đến dòng hiện tổng tiền
    let totalResult = document.querySelector('#totalAmount');
    //biến đổi nội dung trong phần tổng tiền "$0.00" thành "0.00" kiểu số để tính toán 
    let totalAmount = parseFloat(totalResult.textContent.split('$')[1]);

    // update tổng tiền
    totalAmount += price;

    // thêm dấu "$" vào trước tổng tiến mới tính toán và đưa lên kết quả
    totalResult.textContent = '$' + totalAmount;
}

