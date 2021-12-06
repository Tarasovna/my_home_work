//--------------------------Функции--------------------------

/* function nameFunction(parametrs) { body functions} */
/* function greet() {
    alert('Hello JS');
} */

/* function greet(name) {
    alert(`Hello, ${name}`);
}
greet('Jim'); */
/*  передаем значение параметра -
Jim аргумент function greet
name параметр фун-й greet */


/*--------------------------Локальные переменные--------------------------
Переменные, объявленные внутри функции, видны только внутри этой функции.*/

/* function sayHello() {
    let message = 'Hello';
    console.log(message);
}
sayHello();
console.log(message); //будет ошибка, т.к. переменная видна только внутри функции */


/*--------------------------Возврат значения--------------------------
Функция может вернуть результат, который будет передан в вызвавший её код.*/
/* function getRectAreal(width, height) {
    return width + height;
    //завершает исп-е и указывает зн-е к-е нужно вернуть
}
let RectAreal = getRectAreal(15, 3);
console.log(RectAreal); */


/*--------------------------Function Expression--------------------------
Функция в JavaScript – это не магическая языковая структура, */

/* let greet = function () {
    alert('Hello World');
}
greet();
 */
/*Стрелковые функции*/
/* let getRectArea = (width, height) => width * height
console.log(getRectArea(24, 5)); */

//--------------------------------------------------------------------------------------------------------
/* function sayHi() {   // (1) создаём
  alert( "Привет" );
}

let func = sayHi;    // (2) копируем

func(); // Привет    // (3) вызываем копию (работает)!
sayHi(); // Привет   //     прежняя тоже работает (почему бы нет) */

/* 
-Объявление Function Declaration (1) создало функцию и присвоило её значение переменной с именем sayHi.

-В строке(2) мы скопировали её значение в переменную func. 
Обратите внимание(ещё раз): нет круглых скобок после sayHi.
Если бы они были, то выражение func = sayHi() записало бы результат
 вызова sayHi() в переменную func, а не саму функцию sayHi.

-Теперь функция может быть вызвана с помощью обеих переменных sayHi() и func(). */

/* 
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel); */




//-----------Введение: колбэки ----------------------*/
/*Эта функция загружает на страницу новый скрипт. 
Когда в тело документа добавится конструкция <script src="…">,
 браузер загрузит скрипт и выполнит его.*/
/* function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}

// загрузит и выполнит скрипт
loadScript('js/hw.js'); */



//Красный кружок
/* function go() {
    showCircle(150, 150, 100, div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
  }

  function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        callback(div);
      });
    });
} */
  
//----------------------Рекурсия и стек----------------------
//Итеративный способ: цикл for:

/* function pow(x, n) {
  let result = 1;

  // умножаем result на x n раз в цикле
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert( pow(2, 3) ); // 8 */
//Рекурсивный способ: упрощение задачи и вызов функцией самой себя:
/* 
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) ); // 8 */