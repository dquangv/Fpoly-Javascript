let cartTable = document.querySelector('#cartTable');

// draw table
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

    // get data from session storage if already added to cart (data of products from index page)
    let textProduct = sessionStorage.getItem('productsJSON');
    // transform JSON to JS array or empty array if not added to cart
    let products = JSON.parse(textProduct) || [];

    // put elements of products array into row of table
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

        // add row to the table
        cartList.append(tr);

        // add delete button
        let delButton = tr.querySelector('.delete');
        delButton.addEventListener('click', deleteProduct);
    });

    // get data from session storage if already added to cart (data of products from product page)
    let textProducts = sessionStorage.getItem('productJSON');
    // transform JSON to JS array or empty array if not added to cart
    let product = JSON.parse(textProducts) || [];
    let tr = document.createElement('tr');

    // just put the product data into the row of the table if already added to cart
    // withou if statement, page auto put undefined into the row of the table
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
}

displayCartItems();

let rowProducts = document.querySelector('#cartTable').querySelector('tbody').querySelectorAll('tr');

//add minus and plus buttons after added row to the table
rowProducts.forEach(row => {
    let minusButton = row.querySelector('.fa-minus');
    let plusButton = row.querySelector('.fa-plus');
    let soluong = row.querySelector('p');
    let price = parseFloat(row.querySelector('.price').textContent.split('đ')[0]);
    let rowTotal = parseFloat(row.querySelector('.rowTotal').textContent.split('đ')[0]);

    minusButton.addEventListener('click', function () {
        let value = parseInt(soluong.textContent);

        //min = 1
        if (value !== 1) {
            value -= 1;
            soluong.textContent = value;
            rowTotal = value * price;
        }

        row.querySelector('.rowTotal').textContent = `${rowTotal}đ`;

        // update total price after clicking the minus button
        sumHandler();
    });

    plusButton.addEventListener('click', function () {
        let value = parseInt(soluong.textContent);

        value += 1;
        soluong.textContent = value;
        rowTotal = value * price;
        row.querySelector('.rowTotal').textContent = `${rowTotal}đ`;

        // update total price after clicking the plus button
        sumHandler();
    });
});

// calculate total price
function sumHandler() {
    let trTable = document.querySelector('#cartTable').querySelector('tbody').querySelectorAll('tr');
    let TotalTemp = 0;

    // add price of each row to total
    for (let i = 0; i < trTable.length; i++) {
        let rowPrice = parseFloat(trTable[i].querySelector('.rowTotal').textContent.split('đ')[0]);
        TotalTemp += rowPrice;
    }

    // temp total
    document.querySelector('.sum-product').querySelectorAll('tr')[0].querySelectorAll('td')[1].textContent = `${TotalTemp}đ`;

    // total
    document.querySelector('.sum-product').querySelectorAll('tr')[1].querySelectorAll('td')[1].textContent = `${TotalTemp}đ`;
}

//automatically update when loading the page
sumHandler();

function deleteProduct(event) {
    let delButton = event.target;

    let rowProduct = delButton.parentNode.parentNode;

    rowProduct.remove();

    // update total after deleting product
    sumHandler();
}