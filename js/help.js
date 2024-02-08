//back home button
botonBackHome = document.querySelector('#back-home');
console.log(botonBackHome);

botonBackHome.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = '../index.html';

});