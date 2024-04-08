// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

// Используем querySelectorAll для выбора всех элементов с классом dropdown-item, а затем forEach для перебора каждого элемента и добавления класса super-dropdown с помощью classList.add.

document.querySelectorAll('.dropdown-item').forEach(function(element) {
   element.classList.add('super-dropdown');
   });

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

// Метод classList.toggle. Метод автоматически добавляет класс, если его нет, и удаляет, если он уже присутствует:

document.querySelector('.btn').classList.toggle('btn-secondary');

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

//Проверяем, содержит ли элемент с классом menu класс dropdown-menu. Если да, то метод remove удаляет класс dropdown-menu.
const element = document.querySelector('.menu');
   if(element.classList.contains('dropdown-menu')) {
      element.classList.remove('dropdown-menu');
   };

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

//код найдет первый элемент div с классом dropdown и добавит после него HTML-код с ссылкой.
//'afterend' в методе insertAdjacentHTML указывает на позицию, где должен быть вставлен HTML-код относительно выбранного элемента. В данном случае, 'afterend' означает, что HTML-код будет вставлен сразу после закрывающего тега выбранного элемента, то есть, непосредственно после элемента div с классом dropdown, но уже вне этого div элемента.

document.querySelector('.dropdown').insertAdjacentHTML('afterend', '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

// Выбераем элемент с id dropdownMenuButton и изменяем его id на superDropdown. 

document.querySelector('#dropdownMenuButton').id = 'superDropdown';



// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
//сначала найдём элемент с атрибутом aria-labelledby, равным dropdownMenuButton. Если такой элемент найден, то код добавляет ему атрибут data-dd со значением 3 через свойство dataset.

const el = document.querySelector('aria-labelledby="dropdownMenuButton"]');
   if (el) {
      el.dataset.dd = '3';
   };

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

//Находим элемент с классом dropdown-toggle. Если такой элемент найден, то методом removeAttribute удаляем атрибут type у этого элемента.

const dropdownToggle = document.querySelector('.dropdown-toggle');
   if (dropdownToggle) {
      dropdownToggle.removeAttribute('type');
   };