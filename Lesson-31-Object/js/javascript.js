//----------------------------------Литералы и свойства ----------------------------------
/* const user = {
  name: 'Jane',
  age: 25,
  'eye color': 'brown',
};

console.log(user);
console.log(user.name);
console.log(user['eye color']);

user.age = 30;
console.log(user.age); */

//----------------------------------Цикл «for…in» ----------------------------------
/*Для перебора всех свойств объекта используется цикл for..in. 
Этот цикл отличается от изученного ранее цикла for(;;).*/
/* const user = {
  name: 'Jane',
  age: 25,
  'eye color': 'brown',
};

for (let key in user) {
  console.log(`${key} = ${user[key]}`);
}
 */


//----------------------------------Копирование объектов и ссылки ----------------------------------
/* const user = {
  name: 'Jane',
  age: 25,
  'eye color': 'brown',
};
const user2 = user; // Copy by reference

user.age = 30;
console.log(user2.age);

const user3 = {};
// Copy all the properties into the new object
for (let key in user) {
  user3[key] = user[key];
}
user.age = 25;
console.log(user3.age);
// Full copy of the user object
//Object.assign(dest, src1, src2, src3,...)
const user4 = Object.assign({}, user); */


//----------------------------------Методы объекта ----------------------------------

/* const user = {
  name: 'Jane',
  lastName: 'Doe',
  logIn: function () { //ключ
    console.log('Successfully logged in!');
  },
  fullName() {
    return `${this.name} ${this.lastName}`;
  },
};

user.logIn();
console.log(user.fullName());
 */


//----------------------------------Ключи Св-в ----------------------------------
/* const user = {
  name: 'Jane',
};

let id = Symbol('id');

user[id] = 1;

console.log(user[id]); // Мы можем получить доступ к данным, используя символ в качестве ключа */
