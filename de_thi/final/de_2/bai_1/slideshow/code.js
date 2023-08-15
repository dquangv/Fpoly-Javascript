let img = document.querySelector('img');
let buttons = document.querySelectorAll('button');
let curPos = 0;
let imgList = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];

buttons[0].addEventListener('click', function() {
    curPos = 0;
    img.src = imgList[curPos];
});

buttons[1].addEventListener('click', function() {
    if (curPos == 0) {
        curPos = imgList.length - 1;
        img.src = imgList[curPos];
    } else {
        curPos -= 1;
        img.src = imgList[curPos];
    }
});

buttons[2].addEventListener('click', function() {
    if (curPos == imgList.length - 1) {
        curPos = 0;
        img.src = imgList[curPos];
    } else {
        curPos += 1;
        img.src = imgList[curPos];
    }
});

buttons[3].addEventListener('click', function() {
    curPos = imgList.length - 1;
    img.src = imgList[curPos];
});