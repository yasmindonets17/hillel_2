//Задача 1 
// 1 вариант просто с помощью concat
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let result = [].concat(arr[0],arr[1],arr[2] );
console.log(result);

// 2 вариант просто с помощью c function

let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let flattenArr = arr1.reduce(function(a, b) {
return a.concat(b);
});    
console.log((flattenArr));

//Второе задание 

let inputString = prompt('Введите палидром!');
function checkPalindrome(inputString) {
  if(inputString.length == 1){  //Если длина строки равна 1, она становится палиндромом.
      return true;
  }else{
      let i = 0;
      let j = inputString.length -1;  // Если длина строки нечетная, игнорируйте средний символ
      while(i < j){
          if(inputString[i] != inputString[j]){
              return false;
          }
          i++;
          j--;
      }
  }
  return true;
}
console.log(checkPalindrome(`${inputString}`));

//3.Задание
function sum() {
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}
console.log( sum(2,4,5)); // 11
console.log( sum(10,45,34,130)); // 219

///Бонус 4, 5, 6:
//4.Задание
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
 } 
console.log(getRandom(1,10)); // random int between 1 to 10
console.log(getRandom(80,90)); // random int between 80 to 90

//5. Напишите функцию, которая удаляет все вхождения элемента из заданного массива.

//Например:

//let arr = [23,56,4,78,5,63,45,210,56];
//arr = deleteElement(arr, 56)

//console.log(arr); 

let numbers = [23,56,4,78,5,63,45,210,56];
numbers = numbers.filter((n) => {return n != 56});
console.log(numbers); //[23, 4, 78, 5, 63, 45, 210]


function removeItem(arr, num) {

  let store = [];

  for(let i = 0; i < arr.length; i++) {

    if(arr[i] != num){
    store.push(arr[i]);
    }
  }

  return store;
}
console.log(removeItem([23,56,4,78,5,63,45,210,56], 56));   //[23, 4, 78, 5, 63, 45, 210]
 













// Массив slice 
//let number = [1, 2, 3, 4, 5];
//let other = number.slice(0, 2);
//console.log(other);

//splice
/*let number = [1, 2, 3, 4, 5];
let deleted = number.splice(2, 2);
console.log(deleted);//удаленное 
console.log(number);//остаток 
let number = [1, 2, 3, 4, 5];
let added = number.splice(0, 0, 10, 20);
console.log(number);//модифицированное 
//concat
let number = [1, 2, 3, 4, 5];
let number2 = [6, 7, 8, 9, 10];
let values = [].concat(number, number2);
console.log(values);*/

//indexOf()


/*function showMessage() {
  alert('Hello World');
}
showMessage();   // обязательно вызываем функцию !

let message = "Hello World"; 
function showMessage() {
  alert(message);
}
showMessage();

let message = "Hello World"; 
function showMessage(msg) { // переменная создана но в ней ничего не записано, все что написан ов круглых скобках называется параметрами 
  alert(msg);
}
showMessage();



function showFullName(name, surname) {
  alert(`${name} ${surname}`);
}
showFullName("Alex", "Smith");

let fullName = 'Anna Black'
function showFullName(name, surname) {
  let value = surname === undefined ? fullName : surname; 
  alert(`${name} ${value}`);
}
showFullName("Alex");


function showMessage(message, yes, no){
  if(confirm(message)) {
    yes();
  } else{
    no(); 
  }
} 
function sayYes(){
  alert('You say ok');
}
function sayNo(){
  alert('You say No');
}
showMessage('Do you like cats?', sayYes, sayNo);


function showFullName(name, surname = 'Black') {
  alert(`${name} ${surname}`);
}
showFullName("Alex", "Smith");


function showFullName(message) {
  alert(message);
}

function getFullName(name, surname) {
  return name + '' + surname; 
}


function sayNameToUser(name = 'Alex', surname = 'Smith') {
  let fullName = getFullName(name, surname);
  showFullName(fullName);
}
sayNameToUser('Alex', 'Smith');
*/