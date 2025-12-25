
  function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    const progress = toast.querySelector('.toast-progress');

    // Сбрасываем анимацию
    progress.style.animation = 'none';
    toast.offsetHeight; // триггер перерисовки (сброс анимации)
    progress.style.animation = '';

    // Обновляем текст и стиль
    toast.querySelector('.toast-message').textContent = message;
    toast.classList.remove('error', 'show');
    if (isError) {
      toast.classList.add('error');
    }

    // Показываем
    toast.classList.add('show');

    // Авто-скрытие
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }

  // Проверка параметров URL
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('success')) {
    showToast('Заявка отправлена! Мы свяжёмся с вами.');
    window.history.replaceState(null, null, window.location.pathname);
  } else if (urlParams.has('error')) {
    showToast('Ошибка отправки. Попробуйте позже.', true);
    window.history.replaceState(null, null, window.location.pathname);
  }

