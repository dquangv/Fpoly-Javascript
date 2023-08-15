buttons = document.querySelectorAll('button');
curImg = document.querySelector('img');

img = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];

let curPos = 0;

buttons[0].addEventListener('click', function () {
    curPos = 0;
    curImg.src = img[curPos];
});

buttons[1].addEventListener('click', function () {
    if (curPos == 0) {
        curPos = img.length - 1;
        curImg.src = img[curPos];
    } else {
        curPos -= 1;
        curImg.src = img[curPos];
    }
});

buttons[2].addEventListener('click', function () {
    if (curPos == img.length - 1) {
        curPos = 0;
        curImg.src = img[curPos];
    } else {
        curPos += 1;
        curImg.src = img[curPos];
    }
});

buttons[3].addEventListener('click', function () {
    curPos = img.length - 1;
    curImg.src = img[curPos];
});