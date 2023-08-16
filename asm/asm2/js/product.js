let minusButton = document.querySelector('.fa-minus');
let plusButton = document.querySelector('.fa-plus');
let soluong = document.querySelector('.quantity').querySelector('input');

adjustQuantity();

// add minus and plus buttons
function adjustQuantity() {

    minusButton.addEventListener('click', function () {
        let value = parseInt(soluong.value);

        // min = 1
        if (value !== 1) {
            value -= 1;
            soluong.value = value;
        }
    });

    plusButton.addEventListener('click', function () {
        let value = parseInt(soluong.value);
        value += 1;
        soluong.value = value;
    });
}

let addCart = document.querySelector('.cart');

addCart.addEventListener('click', function () {
    let product = addCart.parentNode.parentNode;
    let img = product.querySelector('img');
    let indexSrcImg = img.src.indexOf('pic/');
    let srcImg = img.src.substring(indexSrcImg);
    let name = product.querySelector('h1').textContent;
    let price = parseFloat(product.querySelector('h2').textContent.split('đ')[0]);
    let soLuong = parseInt(soluong.value);
    // get data product from session storage if already added to cart then transforming JSON to JS array, otherwise create a empty array
    let productJSON = JSON.parse(sessionStorage.getItem('productJSON')) || [];

    // put data of product into array
    productJSON.push(srcImg, name, price, soLuong);

    // put array into session storage again
    sessionStorage.setItem('productJSON', JSON.stringify(productJSON));

    alert('Bạn đã thêm vào giỏ hàng');
});
