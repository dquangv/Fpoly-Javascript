let products = document.querySelectorAll('.column');

// show addcart and detail product buttons when mouseover a product
products.forEach(product => {
    product.addEventListener('mouseover', buttonAddCart);
    product.addEventListener('mouseout', noneButtonAddCart);
});

function buttonAddCart(event) {
    let product = event.currentTarget;
    let button = product.querySelector('.buttonAddCart');
    let detail = product.querySelector('.detail');
    let img = product.querySelector('.san-pham');
    
    // decrease the opacity of the product when mouseover that product
    img.style.opacity = 0.5;

    //show buttons, default is hidden
    button.style.display = 'block';
    detail.style.display = 'block';
}

function noneButtonAddCart(event) {
    let product = event.currentTarget;
    let button = product.querySelector('.buttonAddCart');
    let detail = product.querySelector('.detail');
    let img = product.querySelector('.san-pham');

    // increace the opacity of the product to normal when mouseout that product
    img.style.opacity = 1;
    
    // hide the buttons again
    button.style.display = 'none';
    detail.style.display = 'none';
}