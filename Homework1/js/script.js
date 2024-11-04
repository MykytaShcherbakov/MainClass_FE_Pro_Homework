// МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ JS
let sum = 5 + 10;
console.log("Сумма 5 и 10:" + sum);

let difference = 20 - 7;
console.log("Разница между 20 и 7:" + difference);

let product = 8 * 3;
console.log("Результат 8 * 3:" + product);

let divisionResult = 15 / 3;
console.log("Результат 15 / 3:" + divisionResult);

let remainder = 17 % 5;
console.log("Остаток от деления 17 % 5:" + remainder);

let x = 10;
x++;
console.log("Значение x после инкремента:" + x);

let y = 10;
y--;
console.log("Значение y после декремента:" + y);

let power = 2 ** 4;
console.log("Результат 2 ** 4:" + power);

let z = 10;
z += 5;
console.log("Значение z после z += 5:" + z);

let a = 6;
a *= 3;
console.log("Значение a после a *= 3:" + a);

// ОПЕРАТОРЫ СРАВНЕНИЯ JS
console.log("Результат 5 > 3: " + (5 > 3));
console.log("Результат 7 <= 7: " + (7 <= 7));
console.log("Результат 10 == '10': " + (10 == '10'));
console.log("Чем отличается оператор == от ===: оператор == проверяет равенство значений без учета типа, а === проверяет равенство и значений, и типов");
console.log("Результат 0 === false: " + (0 === false));
console.log("Результат 'apple' > 'banana': " + ('apple' > 'banana'));
console.log("Результат null == undefined: " + (null == undefined));
console.log("Результат NaN == NaN: " + (NaN == NaN));
console.log("Результат 5 != '5': " + (5 != '5'));
console.log("Результат '5' !== 5: " + ('5' !== 5));

// ПРЕОБРАЗОВАНИЯ В JS ЯВНЫЕ И НЕЯВНЫЕ
console.log("Преобразование числа 10 в строку явно: " + String(10));
console.log("Неявное преобразование строки '5' при выражении '5' * 2: " + ('5' * 2));
console.log("Результат Number('20'): " + Number('20'));
console.log("Преобразование true в число: " + Number(true));
console.log("Тип данных при выполнении выражения 5 + '5': " + typeof (5 + '5'));
console.log("Результат явного преобразования undefined в число: " + Number(undefined));
console.log("Неявное преобразование null при выполнении выражения null + 5: " + (null + 5));
console.log("Преобразование строки '123abc' в число с помощью parseInt: " + parseInt('123abc'));
console.log("Результат Boolean(0): " + Boolean(0));
console.log("Результат String(false): " + String(false));

// ВЗАИМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ: ALERT, PROMPT, CONFIRM
alert('Привет, мир!');
let name = prompt('Введите ваше имя');
let isConfirmed = confirm('Вы уверены?');
let num1 = parseFloat(prompt('Введите первое число'));
let num2 = parseFloat(prompt('Введите второе число'));
alert('Сумма чисел: ' + (num1 + num2));
let c = 42;
alert('Значение переменной c: ' + c);
let userInput = prompt('Введите что-то');
if (userInput === null) {
    console.log('Пользователь нажал "Отмена"');
} else {
    console.log('Пользователь ввёл: ' + userInput);
}
alert('Первая строка\nВторая строка\nТретья строка');
let number = parseFloat(prompt('Введите число'));
alert('Квадрат числа: ' + (number ** 2));
console.log('Результат confirm: ' + confirm('Продолжить?'));
let defaultResponse = prompt('Введите ваше имя', 'Имя по умолчанию');

