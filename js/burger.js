burger_1 = document.getElementById('burger-1');
burger_2 = document.getElementById('burger-2');
menu_1 = document.getElementById('menu-1');
menu_2 = document.getElementById('menu-2');
burger_1.addEventListener('click', () => {
    burger_1.classList.toggle('active');
    menu_1.classList.toggle('active');
});
burger_2.addEventListener('click', () => {
    burger_2.classList.toggle('active');
    menu_2.classList.toggle('active');
});