const ham = document.querySelector('.ham');
const link = document.querySelector('.menu_link');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    link.classList.toggle('active');
    barras.forEach(child => {child.classList.toggle('anime')});
    ham.classList.toggle('girar');
});