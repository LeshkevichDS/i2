var body = document.querySelector('body');
var designs = document.querySelectorAll('.page-design');
var theme = document.querySelector('.theme');

theme.onclick = function () {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    for (let design of designs) {
    design.classList.toggle('darkness');
    design.classList.toggle('lightness');
    }  
};

