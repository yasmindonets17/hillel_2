let count = 7; 
let result =' Значение: '+ 7;
console.log(result);
let count2 = count ** 2;
let result1 = ' Квадрат этого значения: '+  count2;
console.log(result1);
let count3 = count ** 3;
let result2 = ' Куб этого значения: '+ count3
console.log(result2);


let cTemp = 25
let cToFahr = cTemp * 9 / 5 + 32;cToFahr = cTemp * 9 / 5 + 32;
let message = cTemp+' \u00B0С равно ' + cToFahr + ' \u00B0F.';
    console.log(message);

let fTemp = 73;
let fToCel = (fTemp - 32) * 5 / 9;
let message2 = fTemp+' \u00B0F равно ' + fToCel + '\u00B0C.';
console.log(message2);


// Пусть переменная с именем number содержит число 10
//let number = 10;
//console.log(number); - общение через консоль
//number = "Hello!"; - //мы можем переназвначать переменные и тип данных
//console.log(typeof number); //-показывает тип данных этой переменной
// let new //мы объявляем переменную и не обозначанием ее, будет тип данны underfined;

//----------------Константа (для чего?)---------------------------

//const num = 10;   // также переменная но она постоянная, ВСЕГДА, присвоив значение константе мы не можем ее поменять.


//----------------------Оператор сравнения ------------------

//let blockHeight = 100; 
//blockHeight = 100 + 50;  //- оператор сложения 
//blockHeight = 100 + "50"; // -  оператор сложения не преобразовывает типы (он считывает это как строку) получаем 10050 (строка)

// с помощью оператора сложения можно сложить две строки
/*let partOne = "Hello,";
let partTwo = "World";
let sayHi = partOne + partTwo;
console.log(sayHi);
*/
//Операторы славнения -----------
/*let numOne = 10;
let numTwo = 20; 

let resultAll = numOne > numTwo;
console.log(resultAll);  // (false) 10 не больше 20
true false - булевый тип данных 
*/
/*let numOne = 10;
let numTwo = 10; 
let resultAll = numOne == numTwo; // 10 равно 10 (оператор == равно, атоматически преобразовывает тип данных , а оператор === строго сравнения который не преобразовывает строку); 

!= (неравно !== - оператор строго неравенства)
*/

// ----------условное ветвление --------------
/*let numOne = 10;
let numTwo = 20;

if(numOne > numTwo){
    //Выполняем программу, 
    //если условие выполненно (true)
    console.log('Условие Выполнено!');
} else {
    console.log('Условие не выполнено');
}
*/
// Возвращает false: underfined, 0, "", NaN, false; 

// Логические оператори || или  && (если хоть одно не верно код не будет віполнятся) и  ! не (меняет тру на фолсе и фолс на тру)
/*let numOne = 50;
let numTwo = 30;
if(numOne > numTwo || numOne === 50){
    console.log('Выполняем код');
}
*/




// Как узнать тип данных в переменной?
//let a = 8; 
//console.log(typeof a);  //number
//Тип данных строка
//let c = 'Hello';
//console.log(typeof c);  //string
// NaN - не является типом данных, результат выполнения операции к данным которые не являются числами. 
// let f = true; //принимает только два заначения правда ложь (Boolean);

//let name = "Иван";

// Вставим переменную
//alert( `Привет, ${name}!` ); // Привет, Иван!

// Вставим выражение
//alert( `результат: ${1 + 2}` ); // результат: 3