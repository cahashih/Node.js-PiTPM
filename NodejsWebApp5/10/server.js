const EventEmitter = require('events');
let emitter = new EventEmitter();

// Пример 1: Привязка обработчиков к событию 'greet'
let eventName = 'greet';

emitter.on(eventName, function () {
    console.log('Hello all!');
});

emitter.on(eventName, function () {
    console.log('Привет!');
});

emitter.emit(eventName); // Генерация события 'greet'

// Пример 2: Передача параметров событию и обработка их в обработчике
emitter.on(eventName, function (data) {
    console.log(data);
});

emitter.emit(eventName, 'Привет пир!'); // Генерация события 'greet' с передачей данных

// Пример 3: Наследование от EventEmitter с использованием ES6 класса
class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}

let user = new User();
user.on(eventName, function (data) {
    console.log(data);
});

user.sayHi('Мне нужна твоя одежда...');
