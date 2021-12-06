/*1. Написать функцию, которая принимает 2 числа и возвращает -1, 
если первое меньше, чем второе; 
1 – если первое больше, чем второе;
и 0 – если числа равны.*/

/* {
    let a = prompt('Введите 1-е число');
    let b = prompt('Введите 2-е число');
    let first1 = function (a, b) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    }

    let resultTask = 'Результат = ' + first1(a,b);
    console.log(resultTask);
   } */


// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
/* let a = Number(prompt("Введите число"));
  
        function factorial(n) {
            result = n;
            for (let i = n - 1; i > 1; --i) {
                result *= i;
            }
            return result;
}
console.log(factorial(a)); */
        
/*3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
Например: цифры 1, 4, 9 превратятся в число 149.*/
/* 
let num1 = prompt("Введите num1");
let num2 = prompt("Введите num2");
let num3 = prompt("Введите num3");


function numbers(num1, num2, num3) {
    return Number(num1 + num2 + num3);
}
console.log(numbers(num1, num2, num3)); */


/*+ 4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
 Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.*/

/* function AreaCalculation(l, w) {
    let area = l * w;
    if(w == undefined)
{
            area = l * l;
        };
        return area;
    };

    console.log('Площадь : ' + AreaCalculation(2)); */