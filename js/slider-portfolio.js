// Получаем элементы с префиксом portfolio
const portfolioSlidesContainer = document.querySelector(".slides-portfolio");
const portfolioSlides = document.querySelectorAll(".slide-portfolio");
const portfolioPrevBtn = document.getElementById("prev-portfolio");
const portfolioNextBtn = document.getElementById("next-portfolio");

// Состояние слайдера
let portfolioCurrentIndex = 0;
const portfolioTotalSlides = portfolioSlides.length;

// Параметры слайдера
let portfolioSlideWidth = 0;
let portfolioGap = 0;

// Определяем размеры в зависимости от ширины экрана
function portfolioUpdateDimensions() {
  if (window.innerWidth < 1285) {
    portfolioSlideWidth = 258;
    portfolioGap = 37;
  } else {
    portfolioSlideWidth = 567;
    portfolioGap = 102;
  }
}

// Обновление позиции слайдера
function portfolioUpdateSlider() {
  const offset = -portfolioCurrentIndex * (portfolioSlideWidth + portfolioGap);
  portfolioSlidesContainer.style.transform = `translateX(${offset}px)`;
}

// Обработчик клика "назад"
portfolioPrevBtn.addEventListener("click", () => {
  portfolioCurrentIndex = (portfolioCurrentIndex - 1 + portfolioTotalSlides) % portfolioTotalSlides;
  portfolioUpdateSlider();
});

// Обработчик клика "вперёд"
portfolioNextBtn.addEventListener("click", () => {
  portfolioCurrentIndex = (portfolioCurrentIndex + 1) % portfolioTotalSlides;
  portfolioUpdateSlider();
});

// Обработка изменения размера окна
window.addEventListener("resize", () => {
  portfolioUpdateDimensions();
  portfolioCurrentIndex = 0; // Сбрасываем на первый слайд
  portfolioUpdateSlider();
});

// Инициализация при загрузке
portfolioUpdateDimensions();
portfolioUpdateSlider();
