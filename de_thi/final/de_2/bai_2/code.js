let Name = document.querySelector('#name');
let mail = document.querySelector('#email');
let phone = document.querySelector('#phone');
let message = document.querySelector('#subject');
let form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    check();
});

function check() {
    let nameValue = Name.value;
    let mailValue = mail.value;
    let phoneValue = phone.value;
    let messageValue = message.value;

    console.log(nameValue);
    console.log(mailValue);
    console.log(phoneValue);
    console.log(messageValue);
    if (/*checkName(nameValue) || checkMail(mailValue) || checkPhone(phoneValue) || */checkMessage(messageValue)) {
        return false;
    }

    return true;
}

function checkName(name) {
    if (name === '') {
        alert('Please not leave blank');
        return true;
    }
}

function checkMail(mail) {
    if (!/^\w+@\w+.\w+$/.test(mail)) {
        alert('Please enter a valid email address');
        return true;
    }
}

function checkPhone(phone) {
    if (!/^\+84\d{9}$/.test(phone)) {
        alert('Please enter a valid phone number');
        return true;
    }
}

function checkMessage(message) {
    if (message.split(' ').length < 5) {
        alert('Please enter at least 5 words');
        return true;
    }
}