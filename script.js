const themeBtn = document.getElementById('theme');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeBtn.textContent = "Светлая тема";
    } else {
        themeBtn.textContent = "Темная тема";
    }
});