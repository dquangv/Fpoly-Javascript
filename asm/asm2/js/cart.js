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

class Product {
    constructor(img, name, price) {
        this.img = img;
        this.name = name;
        this.price = price;
    }
}

let productsData = [
    new Product("pic/sp1.jpg", "Kem dưỡng ẩm L'Occitane Pivoine", 840000),
    new Product("pic/sp2.jpg", "Kem lót Burberry Fresh Glow", 960000),
    new Product("pic/sp3.jpg", "Nước hoa Chloé Eau de Parfum", 1500000),
    new Product("pic/sp4.jpg", "Nước hoa Lancôme La Vie Est", 1240000),
    new Product("pic/sp5.jpg", "Dung dịch giúp loại bỏ sơn móng", 145000),
    new Product("pic/sp6.jpg", "Tinh chất dưỡng da SK-II Facial", 4100000),
    new Product("pic/sp7.jpg", "Dầu dưỡng da Phytoceuticals Argan", 169000),
    new Product("pic/sp8.jpg", "Son dưỡng Tonymoly Mini Cherry", 200000)
];

let cartTable = document.querySelector('#cartTable').querySelector('tbody');

let product = productsData.map(product => {
    return `
    <tr>
        <td><img src=${product.img} alt="" style="width: 100px;"></td>
        <td>${product.name}</td>
        <td style="color: rgb(244, 121, 141);">${product.price}₫</td>
        <td>
            <div class="num-count">
                <i class="fa-solid fa-minus" style="font-size: 15px;"></i>
                <p>1</p>
                <i class="fa-solid fa-plus" style="font-size: 15px;"></i>
            </div>
        </td>
        <td style="color: rgb(244, 121, 141);">${product.price}₫</td>
    </tr>
`});

cartTable.innerHTML = product.join('');