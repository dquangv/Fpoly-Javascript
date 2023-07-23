// head -> body
console.log(document.querySelector('head').parentElement.lastElementChild);

// html -> script
console.log(document.querySelector('html').lastElementChild.lastElementChild);

// document -> title
console.log(document.querySelector('title'));

// link -> document
console.log(document.querySelector('link').ownerDocument);

//link -> p
console.log(document.querySelector('link').ownerDocument.querySelector('p'));

/*
Bài 3:viết chuỗi dùng cho hàm QuerySelector để lấy một element thỏa:
a) là <p>
b) id có giá trị “price”
c) class có giá trị “button”
d) Có attribute [name]
e) Có attribute [name] và giá trị là “container”
f) là <img>, có attribute [src] và giá trị là “pretty.jpg”
g) class có giá trị “box”, có attribute [width] và giá trị “40px”
*/

// a) là <p>
console.log(document.querySelector('p'));

// b) id có giá trị “price”
console.log(document.querySelector('#price'));

// c) class có giá trị “button”
console.log(document.querySelector('.button'));

// d) Có attribute [name]
console.log(document.querySelector('[name]'));

// e) Có attribute [name] và giá trị là “container”
console.log(document.querySelector('[name][value="container"]'));

// f) là <img>, có attribute [src] và giá trị là “pretty.jpg”
console.log(document.querySelector('[src][alt="pretty.jpg"]'));

// g) class có giá trị “box”, có attribute [width] và giá trị “40px”
console.log(document.querySelector('.box[width="40px"]'));