const fs = require('fs');

let writeableStream = fs.createWriteStream('questions.txt');
writeableStream.write('1. Основы Node.js:\n');
writeableStream.write('Что такое Node.js и его архитектура: Node.js - это среда выполнения JavaScript, которая позволяет выполнять JavaScript на стороне сервера. Он построен на событийно-ориентированной архитектуре и использует механизмы ввода-вывода (I/O) с неблокирующими операциями.');

writeableStream.write('\n2. Модули и пакеты:\n');
writeableStream.write('Импорт и экспорт модулей в Node.js: В Node.js модули могут быть созданы и использованы с помощью команды require для импорта и module.exports или exports для экспорта функций, объектов или переменных.');

writeableStream.write('\n3. Система файлов и потоки (File System and Streams):\n');
writeableStream.write('Работа с файлами и директориями в Node.js: Node.js предоставляет модуль fs для работы с файлами и директориями, что позволяет выполнять операции, такие как чтение, запись, удаление и создание файлов.');

writeableStream.write('\n4. Асинхронное программирование:\n');
writeableStream.write(' Обзор колбэков (callbacks) и промисов (Promises): Колбэки - это функции обратного вызова, используемые для асинхронного кода. Промисы - это объекты, представляющие успешное или неудачное выполнение асинхронной операции.');

writeableStream.write('\n5. Express.js и веб-разработка:\n');
writeableStream.write('Введение в Express.js и создание веб-сервера: Express.js - это популярный фреймворк для создания веб-приложений на Node.js. Он упрощает создание маршрутов и обработку запросов.');

writeableStream.write('\n6. WebSocket и реальное время:\n');
writeableStream.write('Введение в WebSocket и библиотеку Socket.io: WebSocket - это протокол для двунаправленной связи между клиентом и сервером в реальном времени. Socket.io - это библиотека для работы с WebSocket и другими технологиями для реального времени.');

writeableStream.write('\n7. Базы данных:\n');
writeableStream.write('Подключение и работа с базами данных, такими как MongoDB или MySQL: Node.js позволяет подключаться к различным базам данных с использованием соответствующих драйверов и библиотек, таких как Mongoose (для MongoDB) или mysql (для MySQL).');

writeableStream.write('\n8. Аутентификация и безопасность:\n');
writeableStream.write('Реализация аутентификации и авторизации в Node.js приложении: Аутентификация - это процесс проверки личности пользователя, а авторизация - определение прав доступа. Node.js позволяет реализовать эти механизмы с использованием различных библиотек и практик.');
writeableStream.end('\nКонец записи');
let readableStream = fs.createReadStream(
    'questions.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});