window.addEventListener('load', function() {
    let colorBox = document.querySelector("#colorBox");
    let messageBox = document.querySelector("#messageBox");
    let container = document.querySelector("#container");
    let startTime = null;
    let endTime = null;

    function randomPosition() {
        let heightBox = colorBox.offsetHeight;
        let widthBox = colorBox.offsetWidth;
        let heightContainer = container.offsetHeight;
        let widthContainer = container.offsetWidth;

        let posX = Math.floor(Math.random() * (heightContainer - heightBox));
        let posY = Math.floor(Math.random() * (widthContainer - widthBox));

        return {x: posX, y: posY};
    }

    colorBox.addEventListener('click', function() {
        let randomPos = randomPosition();
        colorBox
    });
});

//     let startTime;
//     let timer;

//     function showColorBox() {
//         const randomPos = getRandomPosition();
//         colorBox.style.left = `${randomPos.x}px`;
//         colorBox.style.top = `${randomPos.y}px`;
//         colorBox.style.display = "block";
//         startTime = new Date();
//         timer = setInterval(() => {
//             const currentTime = new Date();
//             const elapsedTime = (currentTime - startTime) / 1000;
//             messageBox.textContent = `It took ${elapsedTime.toFixed(2)} seconds to click`;
//         }, 10);
//     }

//     colorBox.addEventListener("click", function () {
//         clearInterval(timer);
//         colorBox.style.display = "none";
//         messageBox.style.display = "block";
//     });

//     container.addEventListener("click", function (event) {
//         if (event.target.id === "container") {
//             showColorBox();
//             messageBox.style.display = "none";
//         }
//     });

//     showColorBox();
// });


let heightBox = colorBox.offsetHeight;
console.log(heightBox);