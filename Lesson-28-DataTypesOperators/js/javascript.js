//Number
/* let a = 111;
let b = 1.5;
let c = 13 / 0;
let d = NaN;
let e = Infinity;
let f = "a" * 5;
let g;
let h;
g = a + b;
h = a * b;
console.log(h)
console.log(g)
console.log(e)
console.log(f)
 */

//BigInt
/* let BigInteger = 32156987698555n;
let anotherBigInteger = BigInteger + 3n;
console.log(BigInteger); */


//String
/* let str = "Hello.";
let str1 = 'How are your name?';
let phr = str + str1;
let name = "JS."
let phr2 = "My name is ";
let str3 = `${str1} ${phr2} ${name}`;
console.log(str3);
let res = `How are old ${5 + 14}`;
console.log(res); */


//Boolean
/* let nameField= true; 
let ageField = false;
let notEmpty = Boolean(0);
let compare = 13 < 25;
console.log(compare);
console.log(notEmpty); */



//null  or undefined
/* let age = null; //пустое зн-е
let name; // зн-е не установили
console.log(age);
console.log(name); */

//Symbol 
/* let id = Symbol();
let id1 = Symbol('id'); */


//typeof 
/* console.log(typeof 10n);
console.log(typeof 11);
console.log(typeof Symbol());
console.log(typeof null);
console.log(typeof true);
console.log(typeof ("Words")); 
*/



//Операторы арифметические
/* let x = 3,
    y = 4;
console.log(`Opertor
    x - y = ${x - y}
    x + y = ${x + y}
    x * y = ${x * y}
    x / y = ${x / y}
    x % y = ${x % y}
    x ** y =${x ** y}
    `);


let phr = 'Hello!' + ' ' + 'How are you?'
console.log(phr);

let converNumb = '+131313';
//console.log(converNumb);
console.log(-converNumb); */


//Инкремент/декремент
/* let counter = 2;
counter++;        // работает как counter = counter + 1, просто запись короче
console.log( counter ); 

let counter = 0;
counter++;
++counter;
console.log( counter );

let counter = 0;
counter--;
--counter;
console.log( counter );
*/

//Присваинивание 

/* let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)

console.log( n ); // 14 */

/* //Сравнения
let f = '13' == 13;
let g = '01' === 1;

let a = 15 > 3;
let d = 'Я' > 'А';
console.log(f);
 */
//Логические
/* let a = 5 > 3 && 3 < 9;
let b = ('01' === 1) || (2 < 10);
let c = !(7 < 15);
console.log(c); 
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0
*/



//Преобразование
/* //строки преобразуются в числа
let a = '9' / '3';
console.log(a);
//или исп-я ф-ю Number(value)
let str = '1319';
console.log(typeof str);
let num = Number(str);
console.log(typeof num);
console.log(num); */



//Условное ветвление: if, '?'

/*let name = prompt('What is your name', '');

if (name == 'Al') { alert('Вы правы!'); }
    else { alert('Вы не правы!'); }*/


/* let age = prompt('Когда вы посупили в университет?', '');

if (year < 2015) {
  alert( 'Вы еще не родились' );
} else if (year > 2015) {
  alert( 'Кажется это время пенсии ' );
} else {
  alert( 'Верно!' );
} */