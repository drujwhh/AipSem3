let test = 0
if (test > 10) {
    alert('true');
}
else {
    alert('falfe');

}
if (test < 10) {
    alert('true');
}
else {
    alert('falfe');
}
if (test <= 10) {
    alert('true');
}
else {
    alert('falfe');
}
if (test >= 10) {
    alert('true');
}
else {
    alert('falfe');
}
if (test == 10) {
    alert('true');
}
else {
    alert('falfe');
}
if (test != 10) {
    alert('true');
}
else {
    alert('falfe');
}
let test1 = 10;
let test2 = 20;
if (test1 > test2) {
    alert('true');
}
else {
    alert('falfe');
}
if (test1 == test2) {
    alert('true');
}
else {
    alert('falfe');
}
let test3 = 'abc';
if (test3 == 'abc') {
    alert('true');
}
else {
    alert('falfe');
}
let test4 = '123';
let test5 = 123;
if (test4 == test5) {
    alert('true');
}
else {
    alert('falfe');
}
let num = 3;
let num1 = 2;
let num2 = 3;
if (num > 0 && num < 5) {
    alert('true');
}
else {
    alert('falfe');
} if (num >= 10 && num < 20) {
    alert('true');
}
else {
    alert('falfe');
} if (num1 <= 1 && num2 >= 3) {
    alert('true');
}
else {
    alert('falfe');
}
if (!(num > 0 && num < 5)) {
    alert('true');
}
else {
    alert('falfe');
}
test = true;
if (test === true) {
    alert('true');
}
else {
    alert('falfe');
}
if (test === false) {
    alert('true');
}
else {
    alert('falfe');
}
if (test) {
    alert('true');
}
else {
    alert('falfe');
}
test1 = true;
test2 = true;
test3 = true;
if (test1 && !(test2)) {
    alert('true');
}
else {
    alert('falfe');
}
if (test1 && test2) {
    alert('true');
}
else {
    alert('falfe');
} if (!(test1) && !(test2)) {
    alert('true');
}
else {
    alert('falfe');
} if (test1 && test2) {
    alert('true');
}
else {
    alert('falfe');
} if (test1 && test2 && test3) {
    alert('true');
}
else {
    alert('falfe');
} if (test1 || test2 && test3) {
    alert('true');
}
else {
    alert('falfe');
}
test = 10;
 if (test == 10) {
    alert('true');
}
if (test == 10) 
    alert('true');

else 
    alert('falfe');

if (test == 10)
    alert('true');
let day = 21;
if (day <= 10) {
    alert('1')
}
else if (day > 10 && day <= 20) {
    alert('2')
}
else if (day >= 21) {
    alert('3')
}
else if (day < 1 && day > 31) {
    alert('4')
}
num = 33;
if (num >= 10 && num <= 99) {
    let digit1 = (num / 10);
    let digit2 = (num % 10);
    let sum = digit1 + digit2;
    if (sum <= 9) {
        alert(1)
    }
    else {
        alert(2)
    }

}
let lang = 'ru';
switch (lang) {
    case 'ru':
        alert('rus');
        break;
    case 'en':
        alert('eng');
        break;
}
let num = 1;
let res = num >= 0 ? '1' : '2';

alert(res);
let a = 2 * (3 - 1);
let b = 6 - 2;
alert(a == b);
a = 5 * (7 - 4);
b = 1 + 2 + 7;
alert(a > b);
a = 2 ** 4;
b = 4 ** 2;
alert(a != b);
let ok = confrim('skolko let');
if (ok >= 18) {
    alert(18);
}
else {
    alert(false);
}
let min = 10;

if (min >= 0 && min <= 19) {
    alert('1 четверть');
}

if (min >= 20 && min <= 39) {
    alert('2 четверть');
}

if (min >= 40 && min <= 60) {
    alert('3 четверть');
}
let str = '12345';

if (str.length == 3) {
    alert('!');
}
str = "apple"; 

if (str.startsWith('a')) {
    console.log("Строка начинается на символ 'a'");
} else {
    console.log("Строка не начинается на символ 'a'");
}
let str = "index";

if (str.endsWith('x')) {
    console.log("Строка заканчивается на символ 'x'");
} else {
    console.log("Строка не заканчивается на символ 'x'");
}
str = "banana"; 

if (str.startsWith('a') || str.startsWith('b')) {
    console.log("Строка начинается на символ 'a' или 'b'");
} else {
    console.log("Строка не начинается ни на 'a', ни на 'b'");
}
let number = 150; 


if (number % 10 === 0) {
    console.log("Последняя цифра числа равна нулю");
} else {
    console.log("Последняя цифра числа не равна нулю");
}
num = 27; 


if (num % 2 === 0) {
    console.log("Число четное");
} else {
    console.log("Число нечетное");
}
number = 9;


if (number % 3 === 0) {
    console.log(`Число ${number} делится на 3`);
} else {
    console.log(`Число ${number} НЕ делится на 3`);
}
month = 5; 

if (month >= 3 && month <= 5) {
    console.log("Весна");
} else if (month >= 6 && month <= 8) {
    console.log("Лето");
} else if (month >= 9 && month <= 11) {
    console.log("Осень");
} else {
    console.log("Зима");
}
str = 'abcde';


if (str.startsWith('a')) {
    console.log("Первый символ - буква 'a'");
} else {
    console.log("Первый символ - не буква 'a'");
}
number = 12345;


let firstDigit = number.toString()[0];

if (firstDigit === '1' || firstDigit === '2' || firstDigit === '3') {
    console.log("Первая цифра - 1, 2 или 3");
} else {
    console.log("Первая цифра - не 1, 2 или 3");
}
number = 123; 

digit1 = Math.floor(number / 100);     
digit2 = Math.floor((number % 100) / 10);
let digit3 = number % 10;                    

sum = digit1 + digit2 + digit3;
console.log(`Сумма цифр числа ${number} равна ${sum}`);

 number = 123321; 
 str = number.toString();
if (str.length !== 6) {
    console.log("Число должно состоять из 6 цифр");
} else {
    let firstHalf = parseInt(str[0]) + parseInt(str[1]) + parseInt(str[2]);
    let secondHalf = parseInt(str[3]) + parseInt(str[4]) + parseInt(str[5]);

    if (firstHalf === secondHalf) {
        console.log("true");
    } else {
        console.log("Суммы не равны");
    }
}