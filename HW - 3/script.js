// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

/*Чтобы вывести сообщение "все теги прогрузились" в консоль после того, как все теги будут созданы браузером используем событие DOMContentLoaded. 
Код добавляет обработчик событий к документу, который будет выполняться, когда весь HTML будет полностью загружен и разобран, без ожидания завершения загрузки таблиц стилей, изображений и фреймов.*/
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("все теги прогрузились");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

/*Здесь используется событие load, которое срабатывает, когда вся страница полностью загружена, включая все зависимые ресурсы, такие как стили, изображения и фреймы. Это отличается от события DOMContentLoaded, которое срабатывает, когда загружен и разобран только HTML-документ, но нет загрузки всех ресурсов.*/

window.addEventListener("load", function (e) {
  console.log("Страница загрузилась");
});

/*3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование. */

document.addEventListener("click", function (e) {
  const target = e.target;
  // получаем элемент, на который кликнули
  const tagName = target.tagName.toLowerCase();
  // получаем название тега в нижнем регистре
  const hasClass = target.classList.contains("super_element");
  // проверяем наличие класса 'super_element'

  if (hasClass) {
    console.log(
      'Класс "super_element" присутствует в элементе "' + tagName + '".'
    );
  } else {
    console.log(
      'Класс "super_element" отсутствует в элементе "' + tagName + '".'
    );
  }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

// Добавляем обработчик события mouseover, который срабатывает каждый раз, когда курсор мыши наводится на элемент. Затем он проверяет, является ли элемент, на который наведен курсор, элементом textarea, и если да - вывод сообщения в консоль.

document.addEventListener("mouseover", function (e) {
  if (e.target.tagName.toLowerCase() === "textarea") {
    console.log("Вы навели на textarea.");
  }
});
// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо вывести текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

document.addEventListener("DOMContentLoaded", function () {
  // Повесить обработчик события на элемент UL
  document.querySelector("ul").addEventListener("click", function (event) {
    // Проверить, что клик был сделан по элементу BUTTON
    if (event.target.tagName === "BUTTON") {
      // Вывести текст кнопки в консоль
      console.log(event.target.textContent);
    }
  });
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Первый код является более общим и относится ко всей странице HTML. Второй относится только к блоку ul. Он сработает раньше. Порядок выполнения кода зависит от момента, когда браузер выполняет эти обработчики событий...

// Первый обработчик событий привязан к событию "click", которое срабатывает при любом клике на странице. Второй обработчик событий привязан к событию "DOMContentLoaded", которое срабатывает один раз, когда весь HTML-документ был полностью загружен и разобран, но до того, как все стили, изображения и фреймы завершили загрузку.

// Обработчик "DOMContentLoaded" является одноразовым и срабатывает раньше, чем пользователь успеет совершить клик в отличие от "click".

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li (кнопки button) в болке ul.

// Выбираем каждую вторую кнопку button внутри  элемента li в блоке ul
const buttons = document.querySelectorAll("ul li:nth-child(even) button");

// Изменяем цвет фона кнопки
buttons.forEach((button) => {
  button.style.backgroundColor = "#FF5733";
});
