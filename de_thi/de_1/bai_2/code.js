let form = document.querySelector('form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let phone = document.querySelector('#phone');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn sự kiện mặc định của nút submit

    let isValid = true;

    // Kiểm tra username
    if (username.value.trim() === '') {
        username.parentElement.querySelector('small').textContent = 'Username cannot be empty';
        isValid = false;
    } else if (username.value.includes(' ')) {
        username.parentElement.querySelector('small').textContent = 'Username cannot contain spaces';
        isValid = false;
    }

    // Kiểm tra email
    if (!/^.+@.+\..+$/.test(email.value)) {
        email.parentElement.querySelector('small').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Kiểm tra password
    if (password.value.length < 6 || !/[a-z]/.test(password.value) || !/[A-Z]/.test(password.value) || !/\d/.test(password.value)) {
        password.parentElement.querySelector('small').textContent = 'Password must have at least 6 characters, including lowercase, uppercase, and numeric characters';
        isValid = false;
    }

    // Kiểm tra phone number
    if (!/^\+84\d{10}$/.test(phone.value)) {
        phone.parentElement.querySelector('small').textContent = 'Please enter a valid phone number starting with +84 and containing 12 digits';
        isValid = false;
    }

    if (isValid) {
        form.submit(); // Gửi form nếu dữ liệu hợp lệ
    }
});
