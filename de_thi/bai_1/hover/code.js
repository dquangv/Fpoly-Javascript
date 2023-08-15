button = document.querySelector('button');
img = document.querySelector('img');

button.addEventListener('mouseover', function() {
    img.src = "2.jpg";
})

button.addEventListener('mouseout', function() {
    img.src = "1.jpg";
});
