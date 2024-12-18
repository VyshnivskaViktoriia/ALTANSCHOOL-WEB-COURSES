// Отримуємо кнопку та навігацію
const navButton = document.getElementById('nav-btn');
const headNav = document.getElementById('head-nav');

// Додаємо обробник події для кліку на кнопку
navButton.addEventListener('click', () => {
    // Додаємо або видаляємо клас 'open' у навігації
    headNav.classList.toggle('open');
});
