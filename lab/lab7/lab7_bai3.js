//khi web load xong
window.addEventListener('load', function () {
    let colorBox = document.querySelector("#colorBox");
    let messageBox = document.querySelector("#messageBox");
    let container = document.querySelector("#container");
    //tạo biến lưu trữ đối tượng thời gian tại thời điểm mới load xong web
    let startTime = new Date();

    //hàm lấy vị trí bất kì trong khung hình vuông
    function randomPosition() {
        let heightBox = colorBox.offsetHeight;
        let widthBox = colorBox.offsetWidth;
        let heightContainer = container.offsetHeight;
        let widthContainer = container.offsetWidth;

        //lấy kích thước khung trừ kích thước hộp để đảm bảo hộp nằm trong khung, nhân với random trong khoảng (0,1) và làm tròn xuống để cho ra toạ độ bất kì từ 0 đến toạ độ tối đa để hộp nằm trong khung
        let posX = Math.floor(Math.random() * (widthContainer - widthBox));
        let posY = Math.floor(Math.random() * (heightContainer - heightBox));

        return { x: posX, y: posY };
    }

    let randomPos = randomPosition();

    //gán toạ độ bất kì vào cho hộp
    colorBox.style.left = `${randomPos.x}px`;
    colorBox.style.top = `${randomPos.y}px`;

    //khi hộp được click
    colorBox.addEventListener('click', function () {
        //tạo đối tượng thời gian lưu trữ thời điểm click hộp
        let endTime = new Date();
        
        colorBox.style.display = 'none';

        //khoảng thời gian = thời điểm click hộp trừ thời điểm load web, chia 1000 để đổi từ mili giây sang giây
        messageBox.textContent = `It took ${(endTime - startTime) / 1000} seconds to click`;
    });
});