// Получаем все ссылки на вкладки и их соответствующие элементы содержимого
const tabLinks = document.querySelectorAll('.tab-link');
const tabItems = document.querySelectorAll('.tab-item');

// Обработчик клика по вкладке
tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        const tabId = link.getAttribute('data-tab');

        // Убираем класс 'current' у всех вкладок и элементов содержимого
        tabLinks.forEach(item => {
            item.classList.remove('current');
        });
        tabItems.forEach(item => {
            item.classList.remove('current');
        });

        // Добавляем класс 'current' только выбранной вкладке и ее содержимому
        link.classList.add('current');
        document.getElementById(tabId).classList.add('current');
    });
});