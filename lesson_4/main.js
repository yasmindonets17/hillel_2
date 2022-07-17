// Задание первое Написать программу, которая создает новый массив из произведения(*) значений двух массивов одинакового размер. Также, нужно обработать ситуацию, если массивы будут разной длины.

//Например даны такие массивы:
//let arr1 = [3, 45, 23, 78, 34];
//let arr2 = [4, 2, 34, 4,12, 1];
//то в консоле будет такой вывод:

//[12, 90, 782, 312, 408, 1];

let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4,12, 1];
let arr3 = [];
  if (arr1.length > arr2.length) {
    let count = arr1.length;
  } else {
    var count = arr2.length;
  }
      for (let i = 0; i < count; i++) {
        if (arr2[i] === undefined) {
            arr2.push(0);
        } else {
            if (arr1[i] === undefined) {
              arr1.push(1);
            }
        }
        arr3.push(arr1[i] * arr2[i]);
      }
console.log(arr3); // [12, 90, 782, 312, 408, 1]



//Задание второе: 
//Написать программу для поиска повторяющихся значений в заданном массиве. 
//В консоле должен выводиться массив со всеми элементы, которые повторяются более одного раза.

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
//вариант третий но тут выводит (3) [4, 1, 4]; 
const yourArray = [4,2,34,4,1,12,1,4];

const yourArrayWithoutDuplicates = [...new Set(yourArray)]

let duplicates2 = [...yourArray]
yourArrayWithoutDuplicates.forEach((item) => {
  const i = duplicates2.indexOf(item)
  duplicates2 = duplicates2
    .slice(0, i)
    .concat(duplicates2.slice(i + 1, duplicates2.length))
})

console.log(duplicates2); 

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
`(findLetter(word)));














//Массив (начало);
//Существует два варианта  создания пустого массива:

//let arr = new Array();
//let arr = [];
//let fruits = ["Яблоко", "Апельсин", "Слива"];

//Мы можем получить элемент, указав его номер в квадратных скобках:

//let fruits = ["Яблоко", "Апельсин", "Слива",];// - висячая запятая!

//alert( fruits[0] ); // Яблоко
//alert( fruits[1] ); // Апельсин
//alert( fruits[2] ); // Слива