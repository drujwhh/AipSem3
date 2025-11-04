let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
	console.log(elem);
}
let obj = { x: 1, y: 2, z: 3 };
for (let key in obj) {
	console.log(key);
}
for (let key in obj) {
	console.log(obj[key]);
}
let i = 1;
while (i <= 100) {
	console.log(i);
	i++
}
i = 100;
while (i > 0) {
	console.log(i);
	i--
}
i = 11;
while (i <= 33) {
	console.log(i);
	i++;
}
let cnt = 0;
let num = 1;
while (num < 1000) {
	num = num * 3;
	cnt++
}
console.log(num);
console.log(cnt);
for (i = 1; i <= 100; i++) {
	console.log(i)
}
for (i = 11; i <= 33; i++) {
	console.log(i)
}
for (i = 0; i <= 100; i++) {
	if (i % 2 == 0) {
		console.log(i)
	}
}
for (i = 1; i <= 99; i++) {
	if (i % 2 != 0) {
		console.log(i)
	}
}
for (i = 100; i > 0; i--) {
	console.log(i)
}
arr = ['a', 'b', 'c', 'd', 'e'];
for (i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
for (i = 1; i < arr.length - 1; i++) {
	console.log(arr[i]);
}
for (i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
}
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr) {
	if (elem > 3 && elem < 10) {
		console.log(elem);
	}
}
obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
for (let key in obj) {
	if (obj[key] % 2 == 0) {
		console.log(obj[key]);
	}
}
let res = 0;

for (i = 2; i <= 100; i++) {
	if (i % 2 == 0) {
		res += i;
	}
}

console.log(res);
res = 0;
for (i = 1; i <= 99; i++) {
	if (i % 2 != 0) {
		res += i;
	}
}

console.log(res);
res = 0;
for (i = 1; i <= 20; i++) {
	let res1 = i * 3;
	res += res1

}

console.log(res);

arr = [2, 5, 9, 3, 1, 4];
res = 0;
for (elem of arr) {
	res += elem;
}
console.log(res);

arr = [2, 5, 9, 3, 1, 4];
res = 0;
for (elem of arr) {
	if (elem % 2 == 0) {
		res += elem;
	}
}
console.log(res);

arr = [2, 5, 9, 3, 1, 4];
res = 0;
for (elem of arr) {
	res += elem ** 2;
}
console.log(res);

arr = [2, 5, 9, 3, 1, 4];
res = 0;
for (elem of arr) {
	if (res == 0) {
		res += elem;
	} else {
		res = res * elem;
	}
}
console.log(res);
str = '';

for (i = 1; i <= 5; i++) {
	str += '-';
}

console.log(str);
str = '';

for (i = 1; i <= 9; i++) {
	str += i;
}

console.log(str);
str = '';

for (i = 9; i >= 1; i--) {
	str += i;
}

console.log(str);
str = '';

for (let i = 1; i <= 9; i++) {
	str += '-' + i;
}

console.log(str);
arr = [1, 2, 3, 4, 5];

for (elem of arr)
	console.log(elem);
arr = [5, 8, 2, 0, 9, 4];
i = 0;

while (i < arr.length && arr[i] !== 0) {
	console.log(arr[i]);
	i++;
}
arr = [10, 5, 8, -3, 7, 2];
sum = 0;
i = 0;

while (i < arr.length && arr[i] >= 0) {
	sum += arr[i];
	i++;
}

console.log("Сумма:", sum);

arr = [1, 5, 8, 3, 2, 3, 7];
let position = -1;
i = 0;

while (i < arr.length) {
	if (arr[i] === 3) {
		position = i;
		break;
	}
	i++;
}

console.log("Позиция первой тройки:", position);
sum = 0;
count = 0;
currentNumber = 1;

while (sum <= 100) {
	sum += currentNumber;
	count++;
	currentNumber++;
}

console.log("Нужно сложить чисел:", count);
console.log("Итоговая сумма:", sum);
i = 1;

while (i <= 100) {
	if (i % 2 !== 0) {
		i++;
		continue;
	}
	console.log(i);
	i++;
}
for (i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		console.log(i);
	}
}

result = '';

for (i = 1; i <= 3; i++) {
	for (j = 1; j <= 3; j++) {
		result += i + '' + j + ' ';
	}
}

console.log(result);
arr = [];

for (i = 1; i <= 10; i++) {
	arr.push(i);
}

console.log(arr);
arr = [];

for (i = 1; i <= 10; i++) {
	arr.push('x');
}

console.log(arr);
arr = [];
arr3 = [1, 2, 3, 4, -1]

for (i = 0; i < arr3.length; i++) {
	if (arr3[i] > 0) {
		arr.push(arr3[i])
	}
}

console.log(arr);
arr = [];
arr3 = [1, 2, 3, 4, -1]
for (i = 0; i < arr3.length; i++) {
	let cube = arr3[i] ** 2;
	arr.push(cube)

}

console.log(arr);
arr = [];
arr3 = [1, 2, 3, 4, -1]
for (i = 0; i < arr3.length; i++) {
	cube = arr3[i] - 1;
	arr.push(cube)

}

console.log(arr);
arr = [];
arr3 = [1, 2, 3, 4, -1]
for (i = 0; i < arr3.length; i++) {
	cube = arr3[i] + 10;
	arr.push(cube)

}

console.log(arr);
obj = { x: 1, y: 2, z: 3 };

for (let key in obj) {
	obj[key] = obj[key] * obj[key];
}

console.log(obj);
obj = { x: 1, y: 2, z: 3 };

for (let key in obj) {
	obj[key] = obj[key] + 1;
}

console.log(obj);
arr = ['a', 'b', 'c', 'd', 'e'];
found = false;

for (i = 0; i < arr.length; i++) {
	if (arr[i] === 'c') {
		found = true;
		break;
	}
}

if (found) {
	console.log('+++');
} else {
	console.log('---');
}
arr = [10, 20, 30, 40, 21, 32, 51];
sum9 = 0;

for (let i = 0; i < arr.length; i++) {
	let firstDigit = String(arr[i])[0];
	if (firstDigit === '1' || firstDigit === '2') {
		sum9 += arr[i];
	}
}

console.log(sum9);