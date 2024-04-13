"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

// DOMContentLoaded используем для запуска функции, которая добавляет обработчики событий на элементы, только после полной загрузки DOM. Обернём наш скрип в эту функцию!
// Добавим в HTML для span - id = t. Находим элементы по их id.(Для станицы это будут уникальные элементы). Код сложнее, чем был на семинаре, но строчек меньше !!!

document.addEventListener("DOMContentLoaded", () => {
  const inputEl = document.querySelector("#from");
  const spanEl = document.querySelector("#t");

  inputEl.addEventListener("input", () => {
    spanEl.textContent = inputEl.value;
  });
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

// Для выполнения данной задачи в HTML проще всего подключить напрямую библиотеку стилей. Лучше прописать стили в отдельном файле СSS.
// Класс animate__animated является общим классом для анимации из библиотеки Animate.css, а animate__fadeInLeftBig - это конкретный класс, который определяет тип анимации (в данном случае, появление элемента с левой стороны с большим смещением).

document.addEventListener("DOMContentLoaded", () => {
  const buttonEl = document.querySelector("button.messageBtn");
  const messageEl = document.querySelector("div.message");

  buttonEl.addEventListener("click", () => {
    messageEl.classList.add("animate__animated", "animate__fadeInLeftBig");
    messageEl.style.visibility = "visible";
  });
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

// добавим style c error в HTML. 
// ".form-control" -  в данном случе лучше так, так как применяются элементы input и select

document.addEventListener("DOMContentLoaded", () => {
   const formEl = document.querySelector('#myForm'); // обращение напрямую на странице
   const submitButtonEl = document.querySelector('#submitButton'); //  обращение напрямую на странице

  submitButtonEl.addEventListener("click", () => {
    let isValid = true; // в процессе выполнения может меняться
    const formElements = formEl.querySelectorAll(".form-control");
    // проверка на валидность
    formElements.forEach((element) => {
      if (!element.value) {
        element.classList.add("error");
        isValid = false;
      } else {
        element.classList.remove("error");
      }
    });

    if (isValid) {
      formEl.submit();
    }
  });
 // эта часть скрипта обеспечивает обратную связь о том, заполнены ли поля формы корректно, подсвечивая незаполненные поля и убирая подсветку, как только поле начинает заполняться. Это помогает предотвратить попытку отправки формы с незаполненными полями 

  formEl.addEventListener("input", (e) => {
    const target = e.target;
     //  обработчик события input ко всей форме. Событие input срабатывает каждый раз, когда пользователь вводит что-то в любое поле ввода внутри формы. 
    if (target.classList.contains("form-control")) {
      if (!target.value) {
        target.classList.add("error");
      } else {
        target.classList.remove("error");
      }
    }
  });
});
