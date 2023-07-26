let numButtons = document.querySelectorAll(".number");
let opeButtons = document.querySelectorAll(".operation");
let calButton = document.querySelector(".calculate");
let clrButton = document.querySelector(".clear");
let display = document.querySelector("#display");

let firstNumber = null;
let operator = null;
let flagClear = false;
let flagCal = false;
let flagAfterCal = false;

//click vào nút số thì hiện lên thanh hiển thị
numButtons.forEach(button => {
    button.addEventListener("click", function () {
        //nếu click số sau khi click "=" thì xem như tính lại từ đầu
        if (flagAfterCal) {
            clear();
        }

        appendNumDisplay(button.textContent);
    });
});

//click vào nút phép tính thì lấy phép tính đó để chạy hàm
opeButtons.forEach(button => {
    button.addEventListener("click", function () {
        operation(button.textContent);
    });
});

//thanh hiển thị
function appendNumDisplay(value) {
    //lần đầu chạy hoặc sau khi clear thì flag luôn là false, sau khi click vào phép toán hoặc dấu "=", flag chuyển thành true để thanh hiển thị hiện số mới
    if (flagClear) {
        display.value = "";
        flagClear = false;
    }

    //nếu cứ click số thì hiển thị thêm số
    display.value += value;
}

function operation(value) {
    //lần đầu click nút phép tính hoặc sau khi click nút "=" thì flag false, do đó không chạy đoạn này. đoạn này để khi click nút phép tính từ lần 2 trở đi (không sau nút "=") thì máy tính cũng sẽ thực hiện việc tính toán 
    if (flagCal && value !== '=') {
        calculate(value);
    }

    //đổi về false để không bị ảnh hưởng khi click phép tính, chỉ true chạy khi click "="
    flagAfterCal = false;

    //lưu giá trị trên thanh hiện vào hạng tử thứ 1, trước khi click tiếp nút số để đọc hạng tử thứ 2
    firstNumber = parseFloat(display.value);

    //lưu phép tính đã click
    operator = value;

    //lần tiếp theo click nút số sẽ clear thanh hiển thị
    flagClear = true;

    //những lần sau đó click nút phép tính sẽ thực hiện phép tính (40)
    flagCal = true;
}

function calculate(value) {
    //nếu click "=" thì sẽ không thực hiện phép tính ngay nữa
    flagCal = false;

    //lưu giá trị trên thanh hiển thị vào biến 2
    let secondNumber = parseFloat(display.value);

    //chạy tính toán với phép tính đã lưu trước đó
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "x":
            result = firstNumber * secondNumber;
            break;
        case ":":
            result = firstNumber / secondNumber;
            break;
        default:
            result = null;
    }

    //thanh hiển thị kết quả
    display.value = result;

    //chuyển true để nếu nút click tiếp theo là số thì xem như tính lại từ đầu
    flagAfterCal = true;
}

function clear() {
    //trả mọi thứ về như cũ
    display.value = "";
    firstNumber = null;
    operator = null;
    flagCal = false;
    flagClear = false;
    flagAfterCal = false;
}

calButton.addEventListener("click", calculate);

clrButton.addEventListener("click", clear);
