//Циклы 
//------------While---------------------------------------------------------
/*let i = 0;
 while (i < 5) {
  console.log(i);
  i++;
} */

//можно остановить цикл на определенном моменте используя метку *break*
/* while (i < 8) {
  console.log(i);
  i++;
  if (i === 4) {
    break;
  }
} */

//или можно поставииь условия с меткой  *continue *
/* while (i < 20) {
  i++;
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
 */

//------------do while -------------------------------------------------------
/*сначала выполняется тело, а затем проверяется условие 
и пока оно верно - он будет выполнятся*/

/* let i = 0;
do {
  i++;
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
while (i < 10);
 */

//------------For -------------------------------------------------------
//for (начало; условие; шаг)
/* for (let i = 0; i < 5; i++) { //increment
  console.log(i);
}
console.log('decrement');
for (let a = 10; a > 0; a--) { //decrement
  console.log(a);
} */
 
//по разным итерованым и номерованым for off/on

/*-----------if else ----------------------
if(условие) {
  утверждение;
}
else {
  утверждение;
}*/
/* const hour = promp22t('Enter current hour');
if (hour >= 6 && hour < 12) {
  alert('Good morning!');
} else if (hour >= 12 && hour < 18) {
  alert('Good afternoon!');
} else {
  alert('Good evening!');
} */

/*-----------тернарный оператор *?* ----------------------
условие ? утверждение1 : утверждение2;*/
/* let accessAllowed;
const age = prompt('How old are you?');
accessAllowed = age >= 18 ? true : false; */


/*-----------Switch ----------------------*/
/* const color = prompt('Choose color', '');

switch (color) {
  case 'red':
    console.log('The color is set to red');
    break;
  case 'green':
    console.log('The color is set to green');
    break;
  case 'blue':
    console.log('The color is set to blue');
    break;
  default:
    console.log('The color is not recognized');
    break;
} */


//При помощи цикла for выведите чётные числа от 2 до 10.
let i = 2
for (; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

let i = 0;
while  ( i < 3) {
  alert(`number ${i}!`);
  i++;
}


/*Напишите цикл, который предлагает prompt ввести число, большее 100. 
Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.* */
let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);