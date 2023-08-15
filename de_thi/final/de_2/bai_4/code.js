let buttons = document.querySelectorAll('button');
let total = 0;
let count = 0;
let countClick = {};

for (let i = 1; i < buttons.length; i++) {
    countClick[i] = 0;
    buttons[i].addEventListener('click', function (event) {
        countClick[i] += 1;

        if (countClick[i] < 3) {
            let price = parseFloat(event.target.parentElement.parentElement.querySelectorAll('td')[1].textContent);

            count += 1;
            total += price;

            document.querySelector('#conchau').querySelector('span').textContent = count;
            document.querySelector('#total').querySelector('span').textContent = total;
        }
    });
};