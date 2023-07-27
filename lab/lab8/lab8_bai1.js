let buttons = document.querySelectorAll('button');
let img = document.querySelector('#image');
let album = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
let posImg = 0;

//button First
buttons[0].addEventListener('click', function() {
    img.src = album[0];
});

//button Previous
buttons[1].addEventListener('click', function() {
    if (posImg > 0) {
        img.src = album[posImg-1];
        posImg -= 1;
    }
});

//button Next
buttons[2].addEventListener('click', function() {
    if (posImg < album.length - 1) {
        img.src = album[posImg+1];
        posImg += 1;
    }
});

//button Last
buttons[3].addEventListener('click', function() {
    img.src = album[album.length-1];
});