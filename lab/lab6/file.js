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
    buttonImg.style = 'width: 200px; height: 200px;';
    
    btnChild[3].insertAdjacentElement('afterend',buttonText2);
    btnChild[3].nextElementSibling.insertAdjacentElement('afterend',buttonImg);
});

btnChild[3].addEventListener('click', function() {
    if (buttonText2) {
        if (buttonText2.textContent === 'I am a lady') {
            return;
        } else {
            buttonText2.remove();
            buttonImg.remove();
        }
    }

    buttonText2 = document.createElement('p');
    buttonText2.style.color = 'pink';
    buttonText2.textContent = 'I am a lady';

    buttonImg = document.createElement('img');
    buttonImg.src = '3.jpg';
    buttonImg.style = 'width: 200px; height: 200px;';

    btnChild[3].insertAdjacentElement('afterend',buttonText2);
    btnChild[3].nextElementSibling.insertAdjacentElement('afterend',buttonImg);
});






//bai 2 cau d
document.addEventListener('keydown', function(event) {
    alert(`You press ${event.key}`);
})





//bai 2 cau e
document.querySelector('input[name="username"]').addEventListener('click', function() {
    alert(`You are inputing ${this.name}`);
});

document.querySelector('input[name="password"]').addEventListener('click', function() {
    alert(`You are inputing ${this.name}`);
});





//bai 3
function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i <6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }

    return color;
}

btnChild[4].addEventListener('click', function() {
    document.querySelector('.box').style.backgroundColor = randomColor();
});

btnChild[5].addEventListener('click', function() {
    let curPosition = parseInt(document.querySelector('.box').style.left || 0);
    document.querySelector('.box').style.left = (curPosition + 10) + 'px';
});