<?php
// send.php

// === Настройки Telegram ===


// === Сбор данных из формы ===
$fio = trim($_POST['fio'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$summ = trim($_POST['summ'] ?? '');
$email = trim($_POST['email'] ?? '');
$description = trim($_POST['description'] ?? '');
$subject = trim($_POST['_subject'] ?? 'Новое сообщение с сайта StudioWeb!');

// === Проверка обязательных полей ===
if (empty($fio) || empty($email)) {
    die('Ошибка: Заполните обязательные поля.');
}

// === Формируем сообщение ===
$message = "<b>📬 Новая заявка с сайта StudioWeb!</b>\n\n";
$message .= "<b>📌 Тема:</b> $subject\n\n";
$message .= "<b>👨‍💼 ФИО:</b> $fio\n";
if (!empty($phone)) {
    $message .= "<b>📞 Телефон:</b> $phone\n";
}
if (!empty($summ)) {
    $message .= "<b>💰 Бюджет:</b> $summ ₽\n";
}
$message .= "<b>📧 Email:</b> $email\n";
if (!empty($description)) {
    $message .= "<b>💬 Комментарий:</b> $description\n";
}
$message .= "<b>⏰ Время:</b> " . date('d.m.Y H:i:s') . "\n";

// === URL Telegram API ===
$url = "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage";

// === Отправка ===
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, [
    'chat_id' => $CHAT_ID,
    'text' => $message,
    'parse_mode' => 'HTML'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
$result = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// === Проверка ответа ===
if ($httpCode === 200) {
    // Успешно
    header('Location: /?success=1');
} else {
    // Ошибка
    header('Location: /?error=1');
}
?>
