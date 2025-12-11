// Получаем элементы
const tarifWrapper = document.querySelector(".slides-tarif");
const tarifSlides = document.querySelectorAll(".slide-tarif");
const tarifPrevBtn = document.getElementById("prev-tarif");
const tarifNextBtn = document.getElementById("next-tarif");

// Константы
const tarifSlideWidth = 370;
const tarifGap = 0;
const tarifTotalSlides = tarifSlides.length;

// Индекс текущего левого слайда
let tarifCurrentIndex = 0;

// Проверка на количество слайдов
if (tarifTotalSlides < 2) {
  console.warn("Слайдер тарифов: недостаточно слайдов");
}

// Функция обновления стилей слайдов
function tarifUpdateSlideStyles() {
  tarifSlides.forEach((slide) => {
    slide.style.transform = "scale(0.8)";
    slide.classList.add("over");
  });

  const activeIndex = tarifCurrentIndex + 1;
  if (tarifSlides[activeIndex]) {
    tarifSlides[activeIndex].style.transform = "scale(1)";
    tarifSlides[activeIndex].classList.remove("over");
  }
}

// Обновление позиции обёртки
function tarifUpdateSliderPosition() {
  const offset = -tarifCurrentIndex * (tarifSlideWidth + tarifGap);
  tarifWrapper.style.transform = `translateX(${offset}px)`;
}

// Инициализация
tarifUpdateSlideStyles();
tarifUpdateSliderPosition();

// Обработчик "Назад"
tarifPrevBtn?.addEventListener("click", () => {
  if (tarifTotalSlides < 2) return;

  if (tarifCurrentIndex > 0) {
    tarifCurrentIndex--;
  } else {
    tarifCurrentIndex = tarifTotalSlides - 2; // Зацикливание: переход к предпоследнему слайду
  }
  tarifUpdateSlideStyles();
  tarifUpdateSliderPosition();
});

// Обработчик "Вперёд"
tarifNextBtn?.addEventListener("click", () => {
  if (tarifTotalSlides < 2) return;

  if (tarifCurrentIndex < tarifTotalSlides - 2) {
    tarifCurrentIndex++;
  } else {
    tarifCurrentIndex = 0; // Зацикливание: возврат в начало
  }
  tarifUpdateSlideStyles();
  tarifUpdateSliderPosition();
});
