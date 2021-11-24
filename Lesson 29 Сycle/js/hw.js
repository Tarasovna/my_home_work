/*1)Запросить у пользователя его возраст и определить, кем он является:
ребенком (0–2), 
подростком (12–18),
взрослым (18_60) или
пенсионером (60– ...).*/

/* let age = prompt('how old are you?')
if (age >= 0 && age <= 2) {
    console.log('You are a baby')
} else if (age >= 12 && age <= 18) {
    console.log('Wow! You are a teenager)')
} else if (age >= 18 && age <= 60) {
    console.log('You are already such an adult)')
} else if (age >= 60) {
    console.log('The pension crept up unnoticed!)')
} else {
    console.log('Data  incorrectly!')
}
 */
       

/*2) Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
который расположен на этой клавише (1–!, 2–@, 3–# и т. д).*/

/* let number = prompt('Enter the number from 0 to 9');
if (number == 0) {
    console.log('0 is )');
}
else if (number == 1) {
    console.log('1 is !');
}
else if (number == 2) {
    console.log('2 is @');
}
else if (number == 3) {
    console.log('3 is #');
}
else if (number == 4) {
    console.log('4 is $');
}
else if (number == 5) {
    console.log('5 is %');
}
else if (number == 6) {
    console.log('6 is ^');
}
else if (number == 7) {
    console.log('7 is &');
}
else if (number == 8) {
    console.log('8 is *');
}
else if (number == 9) {
    console.log('9 is (');
} */

/*3) Подсчитай сумму всех чисел в заданном пользователем диапазоне.*/

/* let a = prompt('Enter the start of the range', '');
let b = prompt('Enter end of range', '');
let res = 1;
while (a < b) {    
    a++;
    res += a;
    
}
console.log(res); */

/*4) Спроси у пользователя 2 числа и найди самый общий делитель.*/
/* let a = prompt('Enter firts number', '');
let b = prompt('Enter second number', '');
let res;
while (a != b) {
  if (a > b) {
    a = a - b;
  }
  else {
    b = b - a;
  }
}
res = a;
console.log(res); */

/*5) Спроси у пользователя число и выведи все делители этого числа.*/
/*  let a = prompt('Enter number', '')
let res = [];
for (let i = 1; i <= a; i++) { 
if (a % i == 0) 
                {
                    res.push(i); 
                }
}
console.log(res);
 */
 

/*6) Запросить у пользователя пятиразрядное число и определить, 
является ли оно палиндромом js*/
/*Я что хотел, есть цифры - я их перевожу в строку,
потом переварачмываю и сравниваю */
 let a = prompt('Введите любое натуральное число', '');
let str = String(a);
let str2 = str.reverse();
let massiv = [str2];
 if (str == massiv) {
     console.log('Polindrom');
}
else {
     console.log('Not a polindrom');
 }