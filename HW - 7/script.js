const playerEl = document.querySelector(".player");
const playPanel = document.createElement("video");
playPanel.src = "assets/convert20mb.mp4";

// Создание элементов управления
playPanel.classList.add("videoBox");
const btnPanel = document.createElement("div");
btnPanel.classList.add("btnPan");
const btnPlayEl = document.createElement("div");
btnPlayEl.classList.add("btnPlay");
const btnPauseEl = document.createElement("div");
btnPauseEl.classList.add("btnPause");
const btnStopEl = document.createElement("div");
btnStopEl.classList.add("btnStop");

// Добавление обработчиков событий для кнопок
btnPlayEl.addEventListener("click", () => {
    playPanel.play();
});

btnPauseEl.addEventListener("click", () => {
    playPanel.pause();
});

btnStopEl.addEventListener("click", () => {
    playPanel.pause();
    playPanel.currentTime = 0;
});
// Создание ползунка громкости
let volumeInput = document.createElement("input");
volumeInput.type = "range";
volumeInput.min = 0;
volumeInput.max = 10;
volumeInput.value = 5;

playPanel.volue = 0.5;
volumeInput.addEventListener("change", (e) => {
    playPanel.volume = e.target.value / 10;
});

// Создание элементов для отображения времени
const currentTimeEl = document.createElement("span");
currentTimeEl.classList.add("currentTime");
const durationTimeEl = document.createElement("span");
durationTimeEl.classList.add("durationTime");


// Создание ползунка прогресса видео
const progressInput = document.createElement("input");
progressInput.type = "range";
progressInput.min = 0;
progressInput.value = 0;
progressInput.classList.add("progress");

// Обновление видео при перемещении ползунка прогресса
progressInput.addEventListener("input", () => {
playPanel.currentTime = (progressInput.value / 100) * playPanel.duration;
});



// Добавление элементов на панель управления
btnPanel.appendChild(btnPlayEl);
btnPanel.appendChild(btnPauseEl);
btnPanel.appendChild(btnStopEl);
btnPanel.appendChild(volumeInput);
playerEl.appendChild(playPanel);
playerEl.appendChild(btnPanel);
btnPanel.appendChild(durationTimeEl);
btnPanel.appendChild(progressInput);


