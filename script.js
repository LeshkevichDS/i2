// изменение темы

var body = document.querySelector('body');
var designs = document.querySelectorAll('.page-design');
var theme = document.querySelector('.theme');
var email = document.querySelector('.email');
var phone = document.querySelector('.phone');

theme.onclick = function () {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    for (let design of designs) {
        design.classList.toggle('dark1');
        design.classList.toggle('light1');
    }
    email.classList.toggle('dark2');
    email.classList.toggle('light2');
    phone.classList.toggle('dark3');
    phone.classList.toggle('light3');
};

// стрелка вверх

var up = document.querySelector('.up');

window.onscroll = function () {
    if (window.pageYOffset > 900) {
        up.classList.add('shown');
    } else {
        up.classList.remove('shown');
    }
};
  
up.onclick = function () {
    window.scrollTo(0, 0);
};
  