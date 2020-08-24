var body = document.querySelector('body');
var design = document.querySelector('.page-design');
var skills = document.querySelectorAll('.skills-item');
var theme = document.querySelector('.theme');

theme.onclick = function () {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    design.classList.toggle('darkness');
    design.classList.toggle('lightness');
    for (let skill of skills) {
    skill.classList.toggle('darkness');
    skill.classList.toggle('lightness');
    }  
};

