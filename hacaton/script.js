const servicesLinks = document.querySelectorAll('.services__items-steps__links');
const servicesItems = document.querySelectorAll('.services__item');

// Показываем первый блок при загрузке
servicesItems[0].style.display = 'flex';

// Добавляем обработчики событий для каждой ссылки
servicesLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    // Скрываем все блоки, кроме текущего
    servicesItems.forEach((item, i) => {
      if (i !== index) {
        item.style.display = 'none';
      } else {
        item.style.display = 'flex';
      }
    });

    // Изменяем цвет ссылки
    servicesLinks.forEach((link, i) => {
      if (i === index) {
        link.style.color = '#E1670E';
      } else {
        link.style.color = '#333333';
      }
    });
  });
});