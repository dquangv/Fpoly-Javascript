let minusButton = document.querySelector('.fa-minus');
let plusButton = document.querySelector('.fa-plus');
let soluong = document.querySelector('.quantity').querySelector('input');

adjustQuantity();

function adjustQuantity() {
    minusButton.addEventListener('click', function () {
        let value = parseInt(soluong.value);
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
console.log(addCart);

addCart.addEventListener('click', function () {
    let product = addCart.parentNode.parentNode;
    let img = product.querySelector('img');
    let indexSrcImg = img.src.indexOf('pic/');
    let srcImg = img.src.substring(indexSrcImg);
    let name = product.querySelector('h1').textContent;
    let price = parseFloat(product.querySelector('h2').textContent.split('đ')[0]);
    let soLuong = parseInt(soluong.value);
    let infoProduct = [];

    console.log(product);
    infoProduct.push(srcImg, name, price, soLuong);

    let productsJSON = JSON.stringify(infoProduct);
    sessionStorage.setItem('productJSON', productsJSON);

    alert('Bạn đã thêm vào giỏ hàng');
});
