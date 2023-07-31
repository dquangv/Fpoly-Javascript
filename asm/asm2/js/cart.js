let cartTable = document.querySelector('#cartTable');

cartTable.innerHTML = `
    <thead>
        <tr>
            <th>Sản phẩm</th>
            <th></th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
`;



function displayCartItems() {
    let cartList = cartTable.querySelector('tbody');

    cartList.innerHTML = '';

    let textProduct = sessionStorage.getItem('productsJSON');
    let products = JSON.parse(textProduct) || [];

    products.forEach(item => {
        let tr = document.createElement('tr');

        tr.innerHTML = `
        <td><img src=${item[0]} alt="" style="width: 100px;"></td>
        <td>${item[1]}</td>
        <td style="color: rgb(244, 121, 141);">${item[2]}đ</td>
        <td>
            <div class="num-count">
                <i class="fa-solid fa-minus" style="font-size: 15px;"></i>
                <p>1</p>
                <i class="fa-solid fa-plus" style="font-size: 15px;"></i>
            </div>
        </td>
        <td style="color: rgb(244, 121, 141);">${item[2]}đ</td>
        `;

        cartList.append(tr);
    });

    let textProducts = sessionStorage.getItem('productJSON');
    let product = JSON.parse(textProducts) || [];
    let tr = document.createElement('tr');

    tr.innerHTML = `
        <td><img src=${product[0]} alt="" style="width: 100px;"></td>
        <td>${product[1]}</td>
        <td style="color: rgb(244, 121, 141);">${product[2]}đ</td>
        <td>
            <div class="num-count">
                <i class="fa-solid fa-minus" style="font-size: 15px;"></i>
                <p>${product[3]}</p>
                <i class="fa-solid fa-plus" style="font-size: 15px;"></i>
            </div>
        </td>
        <td style="color: rgb(244, 121, 141);">${product[2]}đ</td>
        `;

    cartList.append(tr);
}

displayCartItems();

let rowProducts = document.querySelector('#cartTable').querySelector('tbody').querySelectorAll('tr');

rowProducts.forEach(row => {
    let minusButton = row.querySelector('.fa-minus');
    let plusButton = row.querySelector('.fa-plus');
    let soluong = row.querySelector('p');

    minusButton.addEventListener('click', function () {
        let value = parseInt(soluong.textContent);
        if (value !== 1) {
            value -= 1;
            soluong.textContent = value;
        }
    });
    plusButton.addEventListener('click', function () {
        let value = parseInt(soluong.textContent);
        value += 1;
        soluong.textContent = value;
    });
});

