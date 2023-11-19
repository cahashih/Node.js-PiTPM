const fs = require('fs');

// Создание потока для записи в файл
let writeableStream = fs.createWriteStream('hello.txt');
writeableStream.write('Привет мир!');
writeableStream.write('Продолжение записи \n');
writeableStream.end('Завершение записи');

// Создание потока для чтения из файла
let readableStream = fs.createReadStream('hello.txt', 'utf8');

// Обработка события "data" при чтении каждого куска данных
readableStream.on('data', function (chunk) {
    console.log(chunk);
});

