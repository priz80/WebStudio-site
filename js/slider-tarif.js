// Получаем элементы
const tarifWrapper = document.querySelector(".slides-tarif");
const tarifSlides = document.querySelectorAll(".slide-tarif");
const tarifPrevBtn = document.getElementById("prev-tarif");
const tarifNextBtn = document.getElementById("next-tarif");

// Переменная ширины слайда (зависит от viewport)
let tarifSlideWidth = window.innerWidth >= 1280 ? 370 : 300;
const tarifGap = 0;
const tarifTotalSlides = tarifSlides.length;

// Индекс текущего левого слайда
let tarifCurrentIndex = 0;

// Проверка на количество слайдов
if (tarifTotalSlides < 2) {
  console.warn("Слайдер тарифов: недостаточно слайдов");
}

// Функция обновления стилей слайдов (scale и классы)
function tarifUpdateSlideStyles() {
  tarifSlides.forEach((slide) => {
    slide.classList.add("over");
    if (window.innerWidth >= 1280) {
      slide.style.transform = "scale(0.8)";
    } else {
      slide.style.transform = "scale(1)";
    }
  });

  // Активный слайд (средний — следующий после текущего)
  const activeIndex = tarifCurrentIndex + 1;
  if (tarifSlides[activeIndex]) {
    tarifSlides[activeIndex].style.transform = "scale(1)";
    tarifSlides[activeIndex].classList.remove("over");
  }
}

// Обновление позиции обёртки (сдвиг)
function tarifUpdateSliderPosition() {
  const offset = -tarifCurrentIndex * (tarifSlideWidth + tarifGap);
  tarifWrapper.style.transform = `translateX(${offset}px)`;
}

// Обработчик изменения размера окна
function handleResize() {
  const newWidth = window.innerWidth >= 1280 ? 370 : 300;

  if (newWidth !== tarifSlideWidth) {
    tarifSlideWidth = newWidth;
    tarifUpdateSlideStyles();
    tarifUpdateSliderPosition();
  }
}

// Инициализация при загрузке
tarifUpdateSlideStyles();
tarifUpdateSliderPosition();

// Обработчик кнопки "Назад"
tarifPrevBtn?.addEventListener("click", () => {
  if (tarifTotalSlides < 2) return;

  if (tarifCurrentIndex > 0) {
    tarifCurrentIndex--;
  } else {
    tarifCurrentIndex = 5; // Зацикливание к последнему состоянию (6 слайдов)
  }
  tarifUpdateSlideStyles();
  tarifUpdateSliderPosition();
});

// Обработчик кнопки "Вперёд"
tarifNextBtn?.addEventListener("click", () => {
  if (tarifTotalSlides < 2) return;

  if (tarifCurrentIndex < tarifTotalSlides - 3) {
    tarifCurrentIndex++;
  } else {
    tarifCurrentIndex = 0; // Зацикливание в начало
  }
  tarifUpdateSlideStyles();
  tarifUpdateSliderPosition();
});

// Отслеживание изменения размера окна
window.addEventListener("resize", handleResize);
