const fs = require('fs');

let writeableStream = fs.createWriteStream('dzQuastions.txt');
writeableStream.write('1. ������ Node.js:\n');
writeableStream.write('��� ����� Node.js � ��� �����������: Node.js - ��� ����� ���������� JavaScript, ������� ��������� ��������� JavaScript �� ������� �������. �� �������� �� ���������-��������������� ����������� � ���������� ��������� �����-������ (I/O) � �������������� ����������.');

writeableStream.write('2. ������ � ������:\n');
writeableStream.write('������ � ������� ������� � Node.js: � Node.js ������ ����� ���� ������� � ������������ � ������� ������� require ��� ������� � module.exports ��� exports ��� �������� �������, �������� ��� ����������.');

writeableStream.write('3. ������� ������ � ������ (File System and Streams):\n');
writeableStream.write('������ � ������� � ������������ � Node.js: Node.js ������������� ������ fs ��� ������ � ������� � ������������, ��� ��������� ��������� ��������, ����� ��� ������, ������, �������� � �������� ������.');

writeableStream.write('4. ����������� ����������������:\n');
writeableStream.write(' ����� �������� (callbacks) � �������� (Promises): ������� - ��� ������� ��������� ������, ������������ ��� ������������ ����. ������� - ��� �������, �������������� �������� ��� ��������� ���������� ����������� ��������.');

writeableStream.write('5. Express.js � ���-����������:\n');
writeableStream.write('�������� � Express.js � �������� ���-�������: Express.js - ��� ���������� ��������� ��� �������� ���-���������� �� Node.js. �� �������� �������� ��������� � ��������� ��������.');

writeableStream.write('6. WebSocket � �������� �����:\n');
writeableStream.write('�������� � WebSocket � ���������� Socket.io: WebSocket - ��� �������� ��� ��������������� ����� ����� �������� � �������� � �������� �������. Socket.io - ��� ���������� ��� ������ � WebSocket � ������� ������������ ��� ��������� �������.');

writeableStream.write('7. ���� ������:\n');
writeableStream.write('����������� � ������ � ������ ������, ������ ��� MongoDB ��� MySQL: Node.js ��������� ������������ � ��������� ����� ������ � �������������� ��������������� ��������� � ���������, ����� ��� Mongoose (��� MongoDB) ��� mysql (��� MySQL).');

writeableStream.write('8. �������������� � ������������:\n');
writeableStream.write('���������� �������������� � ����������� � Node.js ����������: �������������� - ��� ������� �������� �������� ������������, � ����������� - ����������� ���� �������. Node.js ��������� ����������� ��� ��������� � �������������� ��������� ��������� � �������.');
writeableStream.end('����� ������');
let readableStream = fs.createReadStream(
    'questions.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});