const fs = require('fs');

// ����������� ������ �����
fs.readFile('hello.txt', 'utf8', function (error, data) {
    console.log('����������� ������ �����');
    if (error) throw error; // ���� �������� ������
    console.log(data); // ������� ��������� ������
});

// ���������� ������ �����
console.log('���������� ������ �����');
let fileContent = fs.readFileSync('hello.txt', 'utf8');
console.log(fileContent);

// ����������� ������ �����
fs.writeFile('hello.txt', 'Hello ���!', function (error) {
    if (error) throw error; // ���� �������� ������
    console.log(
        '����������� ������ ����� ���������. ���������� �����:'
    );
    let data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data); // ������� ��������� ������
});

// �������� �����
fs.appendFileSync('hello.txt', '������ �� �� ��!');

fs.appendFile('hello.txt', '������ ���!', function (error) {
    if (error) throw error; // ���� �������� ������

    console.log(
        '������ ����� ���������. ���������� �����:'
    );
    let data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data); // ������� ��������� ������
});

// �������� �����
fs.unlink('hello.txt', (err) => {
    if (err) console.log(err); // ���� �������� ������
    else console.log('hello.txt ��� ������');
});
