
    const contactball_s = document.getElementById('contactball-s');
    const ball_s = document.getElementById('ball-s');
    const contactball_l = document.getElementById('contactball-l');
    const ball_l = document.getElementById('ball-l');
    const contactball_m = document.getElementById('contactball-m');
    const ball_m = document.getElementById('ball-m');
    const contactball_mm = document.getElementById('contactball-mm');
    const ball_mm = document.getElementById('ball-mm');
    const contactball_ss = document.getElementById('contactball-ss');
    const ball_ss = document.getElementById('ball-ss');
    const tg = document.getElementById('tg');
    const mail = document.getElementById('mail');
    const vk = document.getElementById('vk');
    const max = document.getElementById('max');
    const group = document.getElementById('group');

    // Обработчик наведения
    contactball_s.addEventListener('mouseover', () => {
        contactball_s.classList.add('contact-ball_hover');
        ball_s.classList.add('ball-hover');
        group.classList.add('group-hover');        
    });

    contactball_m.addEventListener('mouseover', () => {
        contactball_m.classList.add('contact-ball_hover');
        ball_m.classList.add('ball-hover');
        max.classList.add('max-hover');
    });

    contactball_l.addEventListener('mouseover', () => {
        contactball_l.classList.add('contact-ball_hover');
        ball_l.classList.add('ball-hover');
        tg.classList.add('tg-hover');
    });
    
    contactball_mm.addEventListener('mouseover', () => {
        contactball_mm.classList.add('contact-ball_hover');
        ball_mm.classList.add('ball-hover');
        vk.classList.add('vk-hover');
    });
    
    contactball_ss.addEventListener('mouseover', () => {
        contactball_ss.classList.add('contact-ball_hover');
        ball_ss.classList.add('ball-hover');
        mail.classList.add('mail-hover');
    });

    // Обработчик ухода курсора
    contactball_s.addEventListener('mouseout', () => {
        contactball_s.classList.remove('contact-ball_hover');
        ball_s.classList.remove('ball-hover');
        group.classList.remove('group-hover');
    });

      contactball_m.addEventListener('mouseout', () => {
        contactball_m.classList.remove('contact-ball_hover');
        ball_m.classList.remove('ball-hover');
        max.classList.remove('max-hover');
    });

        contactball_l.addEventListener('mouseout', () => {
        contactball_l.classList.remove('contact-ball_hover');
        ball_l.classList.remove('ball-hover');
        tg.classList.remove('tg-hover');
    });

    contactball_mm.addEventListener('mouseout', () => {
        contactball_mm.classList.remove('contact-ball_hover');
        ball_mm.classList.remove('ball-hover');
        vk.classList.remove('vk-hover');
    });
    
    contactball_ss.addEventListener('mouseout', () => {
        contactball_ss.classList.remove('contact-ball_hover');
        ball_ss.classList.remove('ball-hover');
        mail.classList.remove('mail-hover');
    });

 

