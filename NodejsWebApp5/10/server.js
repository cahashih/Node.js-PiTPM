const EventEmitter = require('events');
let emitter = new EventEmitter();

// ������ 1: �������� ������������ � ������� 'greet'
let eventName = 'greet';

emitter.on(eventName, function () {
    console.log('Hello all!');
});

emitter.on(eventName, function () {
    console.log('������!');
});

emitter.emit(eventName); // ��������� ������� 'greet'

// ������ 2: �������� ���������� ������� � ��������� �� � �����������
emitter.on(eventName, function (data) {
    console.log(data);
});

emitter.emit(eventName, '������ ���!'); // ��������� ������� 'greet' � ��������� ������

// ������ 3: ������������ �� EventEmitter � �������������� ES6 ������
class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}

let user = new User();
user.on(eventName, function (data) {
    console.log(data);
});

user.sayHi('��� ����� ���� ������...');
