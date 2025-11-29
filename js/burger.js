burger_1 = document.getElementById('burger-1');
burger_2 = document.getElementById('burger-2');
menu_1 = document.getElementById('menu-1');
menu_2 = document.getElementById('menu-2');

// Функция закрытия всех меню
function closeAllMenus() {
    burger_1?.classList.remove('active');
    menu_1?.classList.remove('active');
    burger_2?.classList.remove('active');
    menu_2?.classList.remove('active');
}

// Переключение меню по клику на бургер
burger_1?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpening = !menu_1.classList.contains('active');
    closeAllMenus();
    if (isOpening) {
        burger_1.classList.add('active');
        menu_1.classList.add('active');
    }
});

burger_2?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpening = !menu_2.classList.contains('active');
    closeAllMenus();
    if (isOpening) {
        burger_2.classList.add('active');
        menu_2.classList.add('active');
    }
});

// Закрытие при клике на пункт меню (или любое место вне меню)
document.addEventListener('click', (e) => {
    // Проверяем, кликнули ли по пункту меню
    if (menu_1?.contains(e.target)) {
        closeAllMenus(); // Закрываем, если клик по пункту меню 1
    }
    if (menu_2?.contains(e.target)) {
        closeAllMenus(); // Закрываем, если клик по пункту меню 2
    }

    // Закрываем, если клик мимо меню и бургеров
    if (!menu_1?.contains(e.target) && !burger_1?.contains(e.target)) {
        burger_1?.classList.remove('active');
        menu_1?.classList.remove('active');
    }
    if (!menu_2?.contains(e.target) && !burger_2?.contains(e.target)) {
        burger_2?.classList.remove('active');
        menu_2?.classList.remove('active');
    }
});

// Закрытие по клавише Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllMenus();
    }
});
