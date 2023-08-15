let buttons = document.querySelectorAll('button');
let total = 0;
let count = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
        let price = parseFloat(event.target.parentElement.parentElement.querySelectorAll('td')[1].textContent);

        count += 1;
        total += price;

        document.querySelector('#pro').querySelector('span').textContent = count;
        document.querySelector('#total').querySelector('span').textContent = total;
    });
};