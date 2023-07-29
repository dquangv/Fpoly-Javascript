let firstName = document.querySelector('#firstName');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let phone = document.querySelector('#phoneNumber');
let form = document.querySelector('#myForm');

form.addEventListener('submit', function (event) {
    if (validateForm()) {
        validateForm();
    } else {
        //chống tự động load lại trang
        event.preventDefault();
        validateForm();
    }
});

function validateForm() {
    //ẩn dòng báo lỗi mỗi khi submit hợp lệ
    document.querySelector('#errorFirstName').textContent = '';
    document.querySelector('#errorEmail').textContent = '';
    document.querySelector('#errorPassword').textContent = '';
    document.querySelector('#errorPhoneNumber').textContent = '';

    if (checkName() || checkEmail() || checkPassword() || checkPhone()) {
        return false;
    }

    return true;
}

function checkName() {
    if (firstName.value === '') {
        document.querySelector('#errorFirstName').textContent = 'Vui lòng nhập họ và tên';
        return true;
    }
}

function checkEmail() {
    //kiểm tra dạng string@string.com
    if (!/^\w+@\w+.com$/.test(email.value)) {
        document.querySelector('#errorEmail').textContent = 'Email chưa phù hợp';
        return true;
    }
}

function checkPassword() {
    //dùng Positive Lookahead (?=) để kiểm tra đồng thời các điều kiện dạng RegEx và các ký tự không bị tiêu thụ sau khi kiểm tra
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}/.test(password.value)) {
        document.querySelector('#errorPassword').textContent = 'Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường và số';
        return true;
    }
}

function checkPhone() {
    if (!/\d{10}/.test(phone.value)) {
        document.querySelector('#errorPhoneNumber').textContent = 'Vui lòng nhập đúng kiểu số điện thoại (10 chữ số)';
        return true;
    }
}