let button = document.querySelector('button');
let img = document.querySelector('img');

img.addEventListener('mouseover', function() {
    button.textContent = 'over';
});

img.addEventListener('mouseout', function() {
    button.textContent = 'out';
});