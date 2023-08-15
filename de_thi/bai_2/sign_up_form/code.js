let username = document.querySelector('#username');
let mail = document.querySelector('#email');
let phone = document.querySelector('#phone');
let password = document.querySelector('#password');
let cPassword = document.querySelector('#cpassword');
let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    if (!check()) {
        event.preventDefault();
    }
});

function check() {
    let nameValue = username.value;
    let mailValue = mail.value;
    let phoneValue = phone.value;
    let passwordValue = password.value;
    let cPasswordValue = cPassword.value;

    if (checkName(nameValue) || checkMail(mailValue) || checkPhone(phoneValue) || checkPassword(passwordValue) || checkCPassword(cPasswordValue, passwordValue)) {
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
    if (!/^\w+@\w+.com$/.test(mail)) {
        alert('Please enter a valid email address');
        return true;
    }
}

function checkPhone(phone) {
    if (!/\d{10}/.test(phone)) {
        alert('Please enter a valid phone number');
        return true;
    }
}

function checkPassword(password) {
    if (password === '') {
        alert('Please not leave blank');
        return true;
    }
}

function checkCPassword(cpassword, password) {
    console.log(cpassword);
    console.log(password);
    if (cpassword === '') {
        alert('Please not leave blank');
        return true;
    } else if (cpassword !== password) {
        alert('Password does not match');
        return true;
    }
}