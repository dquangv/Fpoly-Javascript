let products = document.querySelectorAll('.column');

products.forEach(product => {
    product.addEventListener('mouseover', buttonAddCart);
    product.addEventListener('mouseout', noneButtonAddCart);
});

function buttonAddCart(event) {
    let product = event.currentTarget;
    let button = product.querySelector('.buttonAddCart');
    let detail = product.querySelector('.detail');
    let img = product.querySelector('.san-pham');
    
    img.style.opacity = 0.5;
    button.style.display = 'block';
    detail.style.display = 'block';
}

function noneButtonAddCart(event) {
    let product = event.currentTarget;
    let button = product.querySelector('.buttonAddCart');
    let detail = product.querySelector('.detail');
    let img = product.querySelector('.san-pham');

    img.style.opacity = 1;
    button.style.display = 'none';
    detail.style.display = 'none';
}