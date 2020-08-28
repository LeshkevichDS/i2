var body = document.querySelector('body');
var designs = document.querySelectorAll('.page-design');
var theme = document.querySelector('.theme');
var emails = document.querySelectorAll('.email');
var phones = document.querySelectorAll('.phone');

theme.onclick = function () {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    for (let design of designs) {
        design.classList.toggle('dark1');
        design.classList.toggle('light1');
    }
    for (let email of emails) {
        email.classList.toggle('dark2');
        email.classList.toggle('light2');
    }
    for (let phone of phones) {
        phone.classList.toggle('dark3');
        phone.classList.toggle('light3');
    }
};

