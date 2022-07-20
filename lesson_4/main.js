// Задание первое Написать программу, которая создает новый массив из произведения(*) значений двух массивов одинакового размер. Также, нужно обработать ситуацию, если массивы будут разной длины.

//Например даны такие массивы:
//let arr1 = [3, 45, 23, 78, 34];
//let arr2 = [4, 2, 34, 4,12, 1];
//то в консоле будет такой вывод:

//[12, 90, 782, 312, 408, 1];

let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4,12, 1];
let arr3 = [];
let count;  // вынесла переменную
  if (arr1.length == arr2.length) {
    count = arr1.length;
  } else {
    count = arr2.length;
  }
      for (let i = 0; i < count; i++) {
        if (arr2[i] === undefined) {
            arr2.push(1); //изменила  на 1 
        } else {
            if (arr1[i] === undefined) {
              arr1.push(1);
            }
        }
        arr3.push(arr1[i] * arr2[i]);
      }
console.log(arr3); // [12, 90, 782, 312, 408, 1]


// Решение из урока 
/*let arrNew1 = [3, 45, 23, 78, 34]; 
let arrNew2 = [4, 2, 34, 4,12, 1];
let arrNew3 = []; //создаем новый массив
let values = arrNew1.length > arrNew2.length ? arrNew1 : arrNew2;               //находим самый длинный массив, если масив больше arrNew1.length верни  arrNew1 массив
for(let i = 0; i < values.length; i++){
  let NumValid = arrNew1[i] !== undefined ? arrNew1[i] : arrNew2[i];// проверяем не равена ли цифра массива undefinedб если нет то возвращаем єто число
  let result = arrNew1[i] *  arrNew2[i];
  if (isNaN(result)){
    arrNew3.push(NumValid); // положи туда вадидное число из одного из массивов
  }else{
    arrNew3.push(result); // положи туда результат умножения
  }
} // должно быть меньше длины массива, 
console.log(arrNew3);
//Задание второе: 
//Написать программу для поиска повторяющихся значений в заданном массиве. 
//В консоле должен выводиться массив со всеми элементы, которые повторяются более одного раза.

let arrNew1 = [3, 45, 23, 78, 34]; 
let arrNew2 = [4, 2, 34, 4,12, 1];
let arrNew3 = arrNew1.length >= arrNew2.length ? arrNew1 : arrNew2;
for(let i = 0; i < Math.min(arrNew1.length, arrNew2.length); i++){
  arrNew3[i] = arrNew1[i] * arrNew2[i];
}
console.log(arrNew3);
*/

let arrmy = [4,2,34,4,1,12,1,4];

let duplicates = arrmy.reduce(function(acc, el, i, arr) {
  if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
}, []);

console.log(duplicates); 
//вариант второй но тут выводит (3) [1, 4, 4]
let myArray = [4,2,34,4,1,12,1,4];
let duplicates1 = []
let tempArray = [...myArray].sort()
for (let i = 0; i < tempArray.length; i++){
   if (tempArray[i + 1] === tempArray [i]) {
      duplicates1.push(tempArray[i])
   }
}
console.log(duplicates1);


//Задание 3 
//Написать программу нахождения количества букв в строке. Пользователь вводит вначале слово, а потом букву. Вывести в консоль количество такой букву в заданной строке.

//Например:

//let word = 'Banana';
//let letter = 'n';
//выводит:
//The string contains the following number of 'n' letter: 2

let word = prompt('Ввести текст', '');
let letter = prompt('Какую букву ищем?', ''); 

function findLetter(str) {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (letter.includes(char)) {
      count += 1;
    }
  }
  return count;
}
document.write (`
The string contains the following number of ${letter} letter:  
${findLetter (word)}`);  // поменяла скобки у функции










