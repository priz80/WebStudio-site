// Получаем элементы
const wrapper = document.querySelector(".slides-tarif");
const slidestarif = document.querySelectorAll(".slide-tarif");
const prev = document.getElementById("prev-tarif");
const next = document.getElementById("next-tarif");

// Константы
const slideW = 370; // Ширина картинки
const gapt = 0; // Расстояние между картинками
const totalSlideslengh = slidestarif.length;

// Индекс текущего слайда
let ex = 0;
slidestarif[ex].style.transform = `scale(0.8)`;
slidestarif[ex+1].style.transform = `scale(1)`;
slidestarif[ex+1].classList.remove('over');

// Функция обновления позиции
function updateSliders() {
  const offsets = -ex * (slideW + gapt);
  wrapper.style.transform = `translateX(${offsets}px)`;
}

// Обработчики событий
prev.addEventListener("click", () => {
  if (ex < 7 && ex != 0) {
    ex = (ex - 1 + totalSlideslengh) % totalSlideslengh;
  } else {
    slidestarif[ex+1].style.transform = `scale(0.8)`;
    slidestarif[ex+1].classList.add('over');
    ex = 5;
  }

  if (ex < 6) {
    slidestarif[ex + 2].style.transform = `scale(0.8)`;
    slidestarif[ex+2].classList.add('over');
    slidestarif[ex + 2].style.transition = "transform 0.5s ease-in-out";
  }

  if (ex < 7) {
    slidestarif[ex+1].style.transform = `scale(1)`;
    slidestarif[ex+1].classList.remove('over');
    slidestarif[ex+1].style.transition = "transform 0.5s ease-in-out";
  }

  updateSliders();
});

next.addEventListener("click", () => {
  if (ex < 5) {
    slidestarif[ex+1].style.transform = `scale(0.8)`;
    slidestarif[ex+1].classList.add('over');
    ex = (ex + 1) % totalSlideslengh;
  } else {
    slidestarif[ex+1].style.transform = `scale(0.8)`;
    slidestarif[ex+1].classList.add('over');
    ex = 0;
  }

  if (ex < 7) {
    slidestarif[ex+1].style.transform = `scale(1)`;
    slidestarif[ex+1].classList.remove('over');
    slidestarif[ex+1].style.transition = "transform 0.5s ease-in-out";
  } else {
    slidestarif[ex - 2].style.transform = `scale(0.8)`;
    slidestarif[ex+1].classList.add('over');
  }
  updateSliders();
});
