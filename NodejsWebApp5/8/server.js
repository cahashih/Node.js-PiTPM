function display(data, callback) {
    var randInt = Math.random() * (10 - 1) + 1;
    var err =
        randInt > 5
            ? new Error('������ ����������. randInt ������ 5')
            : null;

    setTimeout(function () {
        callback(err, data);
    }, 0);
}

function displaySync(callback) {
    callback();
}

console.log('������ ������ ���������');

display('��������� ������...', function (err, data) {
    if (err) throw err;
    console.log(data);
});

setTimeout(function () {
    console.log('timeout 500');
}, 500);

setTimeout(function () {
    console.log('timeout 100');
}, 100);

displaySync(function () {
    console.log('without timeout');
});

console.log('���������� ������ ���������');
