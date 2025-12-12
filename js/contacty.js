// Объект с конфигурацией элементов и их зависимостей
const contactConfigs = [
    { contact: 'contactball-s', ball: 'ball-s', target: 'group' },
    { contact: 'contactball-m', ball: 'ball-m', target: 'max' },
    { contact: 'contactball-l', ball: 'ball-l', target: 'tg' },
    { contact: 'contactball-mm', ball: 'ball-mm', target: 'vk' },
    { contact: 'contactball-ss', ball: 'ball-ss', target: 'mail' }
];

// Функция для добавления обработчиков
function setupContactEvents(config) {
    const contactEl = document.getElementById(config.contact);
    const ballEl = document.getElementById(config.ball);
    const targetEl = document.getElementById(config.target);

    if (!contactEl || !ballEl || !targetEl) {
        console.warn(`Один из элементов не найден: ${config}`);
        return;
    }

    const hoverClass = 'contact-ball_hover';
    const ballHoverClass = 'ball-hover';
    const targetHoverClass = `${config.target}-hover`;

    contactEl.addEventListener('mouseover', () => {
        contactEl.classList.add(hoverClass);
        ballEl.classList.add(ballHoverClass);
        targetEl.classList.add(targetHoverClass);
    });

    contactEl.addEventListener('mouseout', () => {
        contactEl.classList.remove(hoverClass);
        ballEl.classList.remove(ballHoverClass);
        targetEl.classList.remove(targetHoverClass);
    });
}

// Инициализация для всех конфигов
contactConfigs.forEach(setupContactEvents);
