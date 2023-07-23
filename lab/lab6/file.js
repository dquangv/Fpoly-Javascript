//bai 2 cau a
let btnChild = document.querySelectorAll('button');
let buttonText = null;

function child() {
    if (buttonText) {
        if (buttonText.textContent === 'I am a child') {
            return;
        } else {
            buttonText.remove();
        }
    }

    buttonText = document.createElement('p');
    buttonText.style.color = 'green';
    buttonText.textContent = 'I am a child';

    btnChild[1].insertAdjacentElement('afterend', buttonText);
}

function lady() {
    if (buttonText) {
        if (buttonText.textContent === 'I am a lady') {
            return;
        } else {
            buttonText.remove();
        }
    }

    buttonText = document.createElement('p');
    buttonText.style.color = 'pink';
    buttonText.textContent = 'I am a lady';

    btnChild[1].insertAdjacentElement('afterend', buttonText);
}


//bai 2 cau b
let imgEle = document.querySelector('img');

imgEle.addEventListener('mouseover', function() {
    imgEle.src = '3.jpg';
});

imgEle.addEventListener('mouseout', function() {
    imgEle.src = '2.jpg';
});


//bai 2 cau c
let buttonText2 = null;
let buttonImg = null;
btnChild[2].addEventListener('click', function() {
    if (buttonText2) {
        if (buttonText2.textContent === 'I am a child') {
            return;
        } else {
            buttonText2.remove();
            buttonImg.remove();
        }
    }

    buttonText2 = document.createElement('p');
    buttonText2.style.color = 'green';
    buttonText2.textContent = 'I am a child';

    buttonImg = document.createElement('img');
    buttonImg.src = '2.jpg';
    
    btnChild[3].insertAdjacentElement('afterend',buttonText2);
    btnChild[3].nextElementSibling.insertAdjacentElement('afterend',buttonImg);
});