// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const getEl = document.getElementById("super_link");
console.log(getEl);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const linkEl = document.querySelectorAll("a.card-link");
//linkEl.innerHTML = "ccылка"; - не работает!!!!
// Нужно делать через forEach - ищет все элементы  
linkEl.forEach(link => {
  link.innerHTML = "ccылка";
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
//обязательно ставить пробел между card-body и card-link!

const cardLink = document.querySelectorAll('.card-body .card-link');
console.log(cardLink);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const element = document.querySelector('[data-number="50"]');
console.log(element);

// 5. Выведите содержимое тега title в консоль.

const titleContent = document.querySelector('title').textContent;
console.log(titleContent);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardTitleEl = document.querySelector('.card-title');
console.log(cardTitleEl.parentNode);

// 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

// Создаем новый элемент <p>
const pEl = document.createElement('p');
// Добавляем текст "Привет" внутрь элемента <p>
pEl.textContent = 'Привет';
// Находим первый элемент с классом 'card'
const cardEl = document.querySelector('.card');
// Вставляем созданный элемент <p> в начало элемента с классом 'card'
cardEl.insertBefore(pEl, cardEl.firstChild);

// 8. Удалите тег h6 на странице.

// Находим элемент <h6> на странице
const h6El = document.querySelector('h6');
// Если элемент существует, удаляем его
if (h6El) {
   h6El.remove();
}
