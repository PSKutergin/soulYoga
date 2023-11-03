const menu = () => {
    const menu = document.querySelector('.header-menu');
    const burger = document.getElementById('burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('open');
    })

    menu.addEventListener('click', (e) => {
        if (e.target.closest('.header-menu-item')) {
            menu.classList.remove('open')
            burger.classList.remove('active');
        }
    });
};

menu();