function isPalindrome(number) {
    let originalNumber = number;
    let reversedNumber = 0;

    while (number > 0) {
        let digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }

    return originalNumber === reversedNumber;
}

// Nhập số nguyên N từ người dùng
let N = parseInt(prompt("Enter an integer:"));

// Kiểm tra và in kết quả
console.log(isPalindrome(N));
