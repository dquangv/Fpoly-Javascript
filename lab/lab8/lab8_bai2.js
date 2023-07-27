let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let phone = document.querySelector('#phoneNumber');
let form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
    //chống tự động load lại trang
    event.preventDefault();
    validateForm();
});

function validateForm() {
    //ẩn dòng báo lỗi mỗi khi submit hợp lệ
    document.querySelector('#errorFirstName').textContent = '';
    document.querySelector('#errorLastName').textContent = '';
    document.querySelector('#errorEmail').textContent = '';
    document.querySelector('#errorPassword').textContent = '';
    document.querySelector('#errorPhoneNumber').textContent = '';

    checkName();
    checkEmail();
    checkPassword();
    checkPhone();
}

function checkName() {
    if (firstName.value === '') {
        document.querySelector('#errorFirstName').textContent = 'Please enter your first name';
    }

    if (lastName.value === '') {
        document.querySelector('#errorLastName').textContent = 'Please enter your last name';
    }
}

function checkEmail() {
    //kiểm tra dạng string@string.com
    if (!/^\w+@\w+.com$/.test(email.value)) {
        document.querySelector('#errorEmail').textContent = 'Your email is not valid';
    }
}

function checkPassword() {
    //dùng Positive Lookahead (?=) để kiểm tra đồng thời các điều kiện dạng RegEx và các ký tự không bị tiêu thụ sau khi kiểm tra
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}/.test(password.value)) {
        document.querySelector('#errorPassword').textContent = 'Please enter a combination of at least six numbers, lowercase letters and capitalize letters';
    }
}

function checkPhone() {
    if (!/\d{10}/.test(phone.value)) {
        document.querySelector('#errorPhoneNumber').textContent = 'Please enter a valid mobile number (10 characters and only digits)';
    }
}