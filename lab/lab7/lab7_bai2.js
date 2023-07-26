let selectedCell = document.querySelectorAll(".cell");
let curPlayer = 1;
let countChecked = 0;
let result = document.querySelector("#result");
let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let restart =document.querySelector("#restart");
let flagStop = false;

selectedCell.forEach((cell, index) => {
    cell.addEventListener("click", function() {
        if (!flagStop) {
            check(index);
        }
    });
});

function check(index) {
    // Dòng của ô được click
    const row = Math.floor(index / 3);

    // Cột của ô được click
    const col = index % 3;

    //nếu ô chưa click thì chạy đoạn code này
    if (selectedCell[index].innerHTML === "") {
        if (curPlayer === 1) {
            selectedCell[index].innerHTML = "X";
            selectedCell[index].style.backgroundColor = "cyan";
            //đổi giá trị cho bảng lưu trữ 2 chiều để kiểm tra kết quả
            board[row][col] = 1;
            //sau khi người chơi 1 click thì chuyển qua người chơi 2
            curPlayer = 2;
        } else {
            selectedCell[index].innerHTML = "O";
            selectedCell[index].style.backgroundColor = "yellow";
            board[row][col] = 2;
            curPlayer = 1;
        }

        // +1 biến đếm sau khi click, khi click lần thứ 5 trở lên mới bắt đầu kiểm tra
        countChecked += 1;
        if (countChecked > 4) {
            handle();
        }
    }
}

function handle() {
    // Kiểm tra chiến thắng theo hàng và cột
    for (let i = 0; i < 3; i++) {
        if (
            board[i][0] !== 0 &&
            board[i][0] === board[i][1] &&
            board[i][0] === board[i][2]
        ) {
            result.textContent = `Player ${board[i][0]} won`;
            flagStop = true;
            return;
        }
        if (
            board[0][i] !== 0 &&
            board[0][i] === board[1][i] &&
            board[0][i] === board[2][i]
        ) {
            result.textContent = `Player ${board[0][i]} won`;
            flagStop = true;
            return;
        }
    }

    // Kiểm tra chiến thắng theo đường chéo
    if (
        board[0][0] !== 0 &&
        board[0][0] === board[1][1] &&
        board[0][0] === board[2][2]
    ) {
        result.textContent = `Player ${board[0][0]} won`;
        flagStop = true;
        return;
    }
    if (
        board[0][2] !== 0 &&
        board[0][2] === board[1][1] &&
        board[0][2] === board[2][0]
    ) {
        result.textContent = `Player ${board[0][2]} won`;
        flagStop = true;
        return;
    }

    if (countChecked === 9) {
        result.textContent = "It's a draw";
        return;
    }
}

function reset() {
    selectedCell.forEach(cell => {
        cell.innerHTML = '';
        cell.style.backgroundColor = 'white';
    });
    curPlayer = 1;
    countChecked = 0;
    result.textContent = '';
    board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    flagStop = false;
}

restart.addEventListener('click', reset);