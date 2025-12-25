const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("success")) {
  alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  window.history.replaceState(null, null, window.location.pathname);
} else if (urlParams.has("error")) {
  alert("Ошибка отправки. Попробуйте позже.");
  window.history.replaceState(null, null, window.location.pathname);
}
