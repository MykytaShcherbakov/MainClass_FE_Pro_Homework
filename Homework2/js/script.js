// task 1 

const getElementAtIndex = (array, index) => array[index];

// task 2 

const describeWeather = (weatherCode, decode) => {
    return decode(weatherCode);
};

const decode = (code) => {
    switch (code) {
        case 'SQ':
            return 'шквал';
        case 'PO':
            return 'пыльный вихрь';
        case 'FC':
            return 'торнадо';
        case 'BR':
            return 'дымка (видимость от 1 до 9 км)';
        case 'HZ':
            return 'мгла (видимость менее 10 км)';
        case 'FU':
            return 'дым (видимость менее 10 км)';
        case 'DS':
            return 'пыльная буря (видимость менее 10 км)';
        case 'SS':
            return 'песчаная буря (видимость менее 10 км)';
        default:
            return 'Неизвестный код погоды';
    }
};
// console.log(describeWeather('SQ', decode)); 
// console.log(describeWeather('HZ', decode));
// console.log(describeWeather('XX', decode)); 

// task 3 
for (let i = 0; i <= 20; i++) {
    // console.log(i);
}
// task 4 
for (let i = 15; i <= 96; i++) {
    // console.log(i);
}
//task 5 
for (let i = 100; i <= 57 ; i--) {
    console.log(i);
}
// task 6 
const numbers = [6, 7, 1, -10, 78, 18, -5, -38, 9];
const doubledNumbers = numbers.map(num => num * 2);

// console.log(doubledNumbers);

// task 7 
const devidedBytwo = numbers
.filter(num => num > 0)
.map (num => num / 2 )
// console.log(devidedBytwo);
//task 8 

// let names = ["Семен", "Иван", "Петр", "Татьяна"];
// let ages = [18, 27, 74, 34];

// let people = names.map((name, index) => ({
//     name: name,
//     age: ages[index]
// }));

// console.log(people);

// task 9 
let names = ["Семен", "Иван", "Петр", "Татьяна"];
let ages = [18, 27, 74, 34];
let combinedArray = [];

for (let i = 0; i < names.length; i++) {
    let ageSuffix = (ages[i] % 10 === 1 && ages[i] !== 11) ? "год" : "лет";
    combinedArray.push(`${names[i]} ${ages[i]} ${ageSuffix}`);
}

// console.log(combinedArray);
// task 10 

let originalArray = [1, 2, 3, 4, 5];

let reversedArray = originalArray.reverse();

// console.log(reversedArray);
