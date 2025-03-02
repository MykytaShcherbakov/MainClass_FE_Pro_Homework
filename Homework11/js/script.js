// Task 1 Легкая Задача
// Напишите функцию introduce, которая выводит в консоль строку:
// "Привет, меня зовут [имя]!"
// Функция должна использовать this.firstname.
// Затем создайте два объекта с полем firstname
// Используя метод call, вызовите функцию introduce для каждого объекта, чтобы в консоли отобразились правильные приветствия.

function introduce() {
    console.log(`Привет, меня зовут ${this.firstname}!`);
}

const person1 = { firstname: "Алексей" };
const person2 = { firstname: "Мария" };

introduce.call(person1);
introduce.call(person2); 


// Task 2 Легкая Задача 
// Создайте функцию sumThreeNumbers, которая принимает три числа и возвращает их сумму. Затем создайте массив из трёх чисел, например [2, 4, 6]. Используйте метод apply, чтобы передать элементы массива в функцию как аргументы и вычислить сумму с помощью apply.

function sumThreeNumbers(a, b, c) {
    return a + b + c;
}

const numbers = [2, 4, 6];
const sum = sumThreeNumbers.apply(null, numbers);
console.log(sum); 


// task 3 

function calculateFinalPrice(extraDiscount, basePrice, tax, productTitle) {
    const finalPrice = (basePrice + tax) * (1 - (this.discountRate + extraDiscount) / 100);
    console.log(`Окончательная цена продукта ${productTitle} для пользователя ${this.fullname}: ${finalPrice}`);
}

const customerA = { discountRate: 5, fullname: "Alice" };
const customerB = { discountRate: 10, fullname: "Bob" };

const customerACalculateFinalPrice = calculateFinalPrice.bind(customerA, 5);
const customerBCalculateFinalPrice = calculateFinalPrice.bind(customerB, 10);

const products = [
    { title: "Телефон", basePrice: 1000, tax: 100 },
    { title: "Ноутбук", basePrice: 2000, tax: 200 },
    { title: "Планшет", basePrice: 500, tax: 50 }
];

products.forEach(product => {
    customerACalculateFinalPrice(product.basePrice, product.tax, product.title);
    customerBCalculateFinalPrice(product.basePrice, product.tax, product.title);
});