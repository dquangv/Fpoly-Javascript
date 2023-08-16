class Product {
    constructor(detail, img, name, price) {
        this.detail = detail;
        this.img = img;
        this.name = name;
        this.price = price;
    }
}

let productsBestSeller1Data = [
    new Product("product1.html", "pic/sp1.jpg", "Kem dưỡng ẩm L'Occitane Pivoine", 840000),
    new Product("product2.html", "pic/sp2.webp", "Kem lót Burberry Fresh Glow", 960000),
    new Product("product3.html", "pic/sp3.webp", "Nước hoa Chloé Eau de Parfum", 1500000),
    new Product("product4.html", "pic/sp4.webp", "Nước hoa Lancôme La Vie Est", 1240000)
];

let productsBestSeller2Data = [
    new Product("product5.html", "pic/sp5.webp", "Dung dịch giúp loại bỏ sơn móng", 145000),
    new Product("product6.html", "pic/sp6.webp", "Tinh chất dưỡng da SK-II Facial", 4100000),
    new Product("product7.html", "pic/sp7.webp", "Dầu dưỡng da Phytoceuticals Argan", 169000),
    new Product("product8.html", "pic/sp8.webp", "Son dưỡng Tonymoly Mini Cherry", 200000)
];

//draw the background into index page
let body = document.querySelector('body');
body.innerHTML = `
    <div class="promo_bar">
        <marquee behavior="" direction=""><strong>Nhận ưu đãi 500.000đ khi thanh toán hoá đơn trên 5 triệu</strong>
        </marquee>
    </div>

    <div class="menu">
        <div class="menu-left">
            <div class="logo"><a href="index.html">skdVIETNAM</a></div>
            <div class="nav">
                <ul>
                    <li>
                        <a href="#">SỨC KHOẺ</a>
                        <ul>
                            <li><a href="#">Thực phẩm chức năng</a></li>
                            <li><a href="#">Hỗ trợ sinh sản</a></li>
                            <li><a href="#">Vật tư y tế</a></li>
                            <li><a href="#">Dụng cụ massage và trị liệu</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">LÀM ĐẸP</a>
                        <ul>
                            <li><a href="#">Chăm sóc da mặt</a></li>
                            <li><a href="#">Trang điểm</a></li>
                            <li><a href="#">Chăm sóc tóc và da đầu</a></li>
                            <li><a href="#">Chăm sóc cơ thể</a></li>
                            <li><a href="#">Dụng cụ, phụ kiện làm đẹp</a></li>
                            <li><a href="#">Nước hoa</a></li>
                            <li><a href="#">Bộ sản phẩm làm đẹp</a></li>
                            <li><a href="#">Chăm sóc cá nhân</a></li>
                            <li><a href="#">Dược mỹ phẩm</a></li>
                            <li><a href="#">Sản phẩm thiên nhiên & Khác</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div class="button">
            <a href="login.html"><img src="pic/user.png" alt="" width="26px"></a>
            <a href="#"><img src="pic/search.png" width="26px" alt=""></a>
            <a href="cart.html"><img src="pic/cart.png" width="24px" alt=""></a>
        </div>
    </div>

    <div class="slider">
        <button class="slider_left">
            <i class="fa-solid fa-angle-left "></i>
        </button>
        <button class="slider_rignt">
            <i class="fa-solid fa-angle-right "></i>
        </button>

        <div class="slider_main">
            <div class="slider_main-img">
                <img class="slider__item" src="pic/background-1.jpg" alt="">
                <img class="slider__item" src="pic/background-2.jpg" alt="">
                <img class="slider__item" src="pic/background-3.jpg" alt="">
                <img class="slider__item" src="pic/background-4.jpg" alt="">
            </div>
        </div>
    </div>

    <div class="promo_bonus">

        <i class="fa-solid fa-truck"></i>
        <p>Free Shipping</p>


        <i class="fa-solid fa-rotate-left"></i>
        <p>Free Return</p>

        <i class="fa-solid fa-gem"></i>
        <p>Earn Points</p>

        <i class="fa-solid fa-credit-card"></i>
        <p>Buy Now, Pay Later</p>

    </div>

    <div class="product-index" id="cartTable">
    </div>

    <footer>
        <div class="info_end">
            <div class="contact">
                <img src="pic/logo(1).jpg" alt="logo"><br>
                <p>skdVIETNAM</p><br>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-tiktok"></i></a>
            </div>
            <div class="story">
                <h4>VỀ skdVIETNAM</h4>
                <a href="#">Giới thiệu về skdVIETNAM</a>
                <br>
                <a href="#">skdVIETNAM Blog</a>
                <br>
                <a href="#">Tuyển dụng</a>
                <br>
                <a href="#">Điều khoản sử dụng</a>
                <br>
                <a href="#">Điều kiện vận chuyển</a>
                <br>
                <a href="#">Bán hàng doanh nghiệp</a>
            </div>
            <div class="collab">
                <h4>HỢP TÁC VÀ LIÊN KẾT</h4>
                <a href="#">Quy chế hoạt động Sàn GDTMĐT</a>
                <br>
                <a href="#">Bán hàng cùng skdVIETNAM</a>
            </div>
            <div class="support">
                <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                Hotline: 1234-5678
                <br>
                <a href="#">Các câu hỏi thường gặp</a>
                <br>
                <a href="#">Gửi yêu cầu hỗ trợ</a>
                <br>
                <a href="#">Hướng dẫn đặt hàng</a>
                <br>
                <a href="#">Phương thức vận chuyển</a>
                <br>
                <a href="#">Chính sách đổi trả</a>
                <br>
                <a href="#">Hướng dẫn trả góp</a>
                <br>
                <a href="#">Chính sách hàng nhập khẩu</a>
            </div>
            <div class="subscribe">
                <form action="">
                    <h4>ĐĂNG KÝ</h4>
                    Hãy là người đầu tiên nhận được thông tin ưu đãi của skdVIETNAM. Bạn có thể huỷ đăng kí bất cứ lúc
                    nào.
                    <br>
                    <input size="30" type="Email" placeholder="Email">
                    <input size="30" type="First Name" placeholder="Họ tên">
                    Giới tính:
                    <input type="radio" value="Name" id="nam" name="sex"><label for="nam">Nam</label>
                    <input type="radio" value="Name" id="nu" name="sex"><label for="nu">Nữ</label><br>
                    <button type="submit"><a href="#">Đăng ký</a></button>
                </form>
            </div>
        </div>
        <div class="copyright">&copy; skdVIETNAM 2023, All Rights Reserved.</div>
    </footer>
    `
// draw 2 sections of product
let index = document.querySelector('.product-index');
index.innerHTML = `
    <h1>Sản phẩm bán chạy</h1>
    <div class="best-seller1">
    </div>
    <div class="best-seller2">
    </div>
    `;

// link data of products 1 to each info product
let product = productsBestSeller1Data.map(product => {
    return `
    <div class="column">
        <a href=${product.detail}>
            <div class="detail">Click for detail</div>
        </a>
            <div class="buttonAddCart">Add to Cart</div>
            <div class="san-pham">
                <img src=${product.img} />
                <div class="ten">${product.name}</div>
                <div class="gia">${product.price}đ</div>
            </div>
    </div>
    `;
});

// put all info products 1 into the page
index.querySelector('.best-seller1').innerHTML = product.join('');

// link data of products 2 to each info product
product = productsBestSeller2Data.map(product => {
    return `
    <div class="column">
        <a href=${product.detail}>
            <div class="detail">Click for detail</div>
        </a>
        <div class="buttonAddCart">Add to Cart</div>
        <div class="san-pham">
            <img src=${product.img} />
            <div class="ten">${product.name}</div>
            <div class="gia">${product.price}đ</div>
        </div>
    </div>
`
});

// put all info products 1 into the page
index.querySelector('.best-seller2').innerHTML = product.join('');

let addCart = body.querySelectorAll('.buttonAddCart');

// add to cart function for each product
addCart.forEach(button => {
    let colummnProduct = button.parentNode;

    let img = colummnProduct.querySelector('img');
    let indexSrcImg = img.src.indexOf('pic/');
    let srcImg = img.src.substring(indexSrcImg);

    let name = colummnProduct.querySelector('.ten').textContent;

    let price = parseFloat(colummnProduct.querySelector('.gia').textContent.split('đ')[0]);

    // save img, name and price of product when click addtocart button
    button.addEventListener('click', () => addToCart(srcImg, name, price));
});

// cart array to contain data products
let cartProducts = [];

function addToCart(srcImg, name, price) {
    // img, name and price of a specific product for 1 array
    let infoProduct = [];
    infoProduct.push(srcImg, name, price);
    cartProducts.push(infoProduct);

    // transform JS array to JSON
    let productsJSON = JSON.stringify(cartProducts);
    // put data into session storage
    sessionStorage.setItem('productsJSON', productsJSON);

    alert('Bạn đã thêm vào giỏ hàng');
}