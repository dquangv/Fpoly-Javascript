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

let sumTotalTemp = parseFloat(document.querySelector('.sum-product').querySelectorAll('tr')[0].querySelectorAll('td')[1].textContent.split('đ')[0]);
let sumTotal = document.querySelector('.sum-product').querySelectorAll('tr')[1].querySelectorAll('td')[1].textContent;

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
        <td style="color: rgb(244, 121, 141);" class='price'>${item[2]}đ</td>
        <td>
            <div class="num-count">
                <i class="fa-solid fa-minus" style="font-size: 15px;"></i>
                <p>1</p>
                <i class="fa-solid fa-plus" style="font-size: 15px;"></i>
            </div>
        </td>
        <td style="color: rgb(244, 121, 141);" class='rowTotal'>${item[2]}đ</td>
        <td><button class="delete">Xoá</button></td>  
        `;

        cartList.append(tr);
        // sumTotalTemp += item[2];
        // document.querySelector('.sum-product').querySelectorAll('tr')[0].querySelectorAll('td')[1].textContent = `${sumTotal}đ`;
        // sumTotal = `${sumTotal}đ`;

        let delButton = tr.querySelector('.delete');
        delButton.addEventListener('click', deleteProduct);
    });

    let textProducts = sessionStorage.getItem('productJSON');
    let product = JSON.parse(textProducts) || [];
    let tr = document.createElement('tr');

    if (product.length > 0) {
        tr.innerHTML = `
            <td><img src=${product[0]} alt="" style="width: 100px;"></td>
            <td>${product[1]}</td>
            <td style="color: rgb(244, 121, 141);" class='price'>${product[2]}đ</td>
            <td>
                <div class="num-count">
                    <i class="fa-solid fa-minus" style="font-size: 15px;"></i>
                    <p>${product[3]}</p>
                    <i class="fa-solid fa-plus" style="font-size: 15px;"></i>
                </div>
            </td>
            <td style="color: rgb(244, 121, 141);" class='rowTotal'>${product[2] * product[3]}đ</td>
            <td><button class="delete">Xoá</button></td>
            `;

        cartList.append(tr);
        let delButton = tr.querySelector('.delete');
        delButton.addEventListener('click', deleteProduct);
    }
    // sumTotalTemp += product[2];
    // document.querySelector('.sum-product').querySelectorAll('tr')[0].querySelectorAll('td')[1].textContent = `${sumTotal}đ`;
    // sumTotal = `${sumTotal}đ`;

}

displayCartItems();

let rowProducts = document.querySelector('#cartTable').querySelector('tbody').querySelectorAll('tr');

rowProducts.forEach(row => {
    let minusButton = row.querySelector('.fa-minus');
    let plusButton = row.querySelector('.fa-plus');
    let soluong = row.querySelector('p');
    let price = parseFloat(row.querySelector('.price').textContent.split('đ')[0]);
    let rowTotal = parseFloat(row.querySelector('.rowTotal').textContent.split('đ')[0]);

    minusButton.addEventListener('click', function () {
        let value = parseInt(soluong.textContent);
        if (value !== 1) {
            value -= 1;
            soluong.textContent = value;
            rowTotal = value * price;
            console.log(value);
            console.log(price);
            console.log(rowTotal);
        }

        row.querySelector('.rowTotal').textContent = `${rowTotal}đ`;
        sumHandler();
    });

    plusButton.addEventListener('click', function () {
        let value = parseInt(soluong.textContent);
        value += 1;
        soluong.textContent = value;
        rowTotal = value * price;
        row.querySelector('.rowTotal').textContent = `${rowTotal}đ`;
        sumHandler();
    });
});


function sumHandler(plus) {
    let trTable = document.querySelector('#cartTable').querySelector('tbody').querySelectorAll('tr');
    let TotalTemp = 0;

    for (let i = 0; i < trTable.length; i++) {
        let rowPrice = parseFloat(trTable[i].querySelector('.rowTotal').textContent.split('đ')[0]);
        // if (plus) {
        //     TotalTemp += rowPrice;
        // } else {
        //     TotalTemp -= rowPrice;
        // }

        TotalTemp += rowPrice;

    }

    document.querySelector('.sum-product').querySelectorAll('tr')[0].querySelectorAll('td')[1].textContent = `${TotalTemp}đ`;
    document.querySelector('.sum-product').querySelectorAll('tr')[1].querySelectorAll('td')[1].textContent = `${TotalTemp}đ`;
}


sumHandler();

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
    sumHandler();
}