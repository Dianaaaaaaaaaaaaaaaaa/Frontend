document.addEventListener('DOMContentLoaded', function () {
  const firstButton = document.getElementById('first-button');
  const secondButton = document.getElementById('second-button');
  const contentContainer = document.querySelector('.content__interesting-articles-container');

  // Проверяем состояние переключателей в localStorage
  const isLineActive = localStorage.getItem('isLineActive');

  // Устанавливаем начальное состояние в зависимости от значения в localStorage
  if (isLineActive === 'true') {
    switchToLine();
  }

  // Обработчики событий для кнопок
  firstButton.addEventListener('click', switchToLine);
  secondButton.addEventListener('click', switchToGrid);

  // Функция для переключения на линейный вид
  function switchToLine() {
    contentContainer.classList.add('content-line'); // Добавляем класс для линейного вида
    localStorage.setItem('isLineActive', 'true'); // Сохраняем состояние в localStorage
  }

  // Функция для переключения на сетку
  function switchToGrid() {
    contentContainer.classList.remove('content-line'); // Удаляем класс для линейного вида
    localStorage.setItem('isLineActive', 'false'); // Сохраняем состояние в localStorage
  }
});
