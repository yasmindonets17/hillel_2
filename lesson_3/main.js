let fib = [];
fib[0] = 0;
fib[1] = 1;
for (let i = 2; i < 7; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}
console.log(fib);


// первое число fib[0] определяем как 0 
//  второе чилос fib[1]  будет 1 
//затем создала цикл i = 2 это третье число (сумма двух предидущих цифр)

//let num = prompt("Введите число?");



// в консоли не выходит вывести как в документе, я сделала два варианта 
let num = prompt("Введите число");

    for (let i = 1; i <= num; i++) 
    {
        for (let j = 1; j <= i; j++)
            console.log(j); 
            console.log(` `); 
    }

    
    let n = prompt("Введите число еще раз");

    for (let i = 1; i <= n; i++) 
    {
        for (var j = 1; j <= i; j++)
            document.write(' ' + j + ' '); 
            document.write('<br>'); 
    }



//Цикл WHILE
//Синтаксис 
//while(Условие) {
   //Тело цикла 
   //Тут будет віполняться код 
//}

//let num = 0; объявляем переменную, присваееваем ей значение 0;
//while(num < 5) {  условия переменная долджна быть меньше 5;
   //console.log(num);выводим консоль; (будут числа 0 1 2 3 4)
   //num++; увеличиваем каждый раз переменную на 1;
//}

//let num = 5;
//while (num) {
   //console.log(num);
   //num--;
//}

// в тот момент когда значение переменной будет равно 0, то ее булевое значение будет равно false и тело цикла не будет выполняется. 

//Пример без {}
//let = 5;
//while(num) console.log(num--);

//Конструкция DO...WHILE когда нам необходимо хотя бы одно выполнения цикла
//let num = 0;
//do{
//   console.log(num);
//   num++;
//} while (num < 5);


//Цикл FOR
//Синтаксис
//for (Начало; Условие; Шаг) {
   //Тело цикла
   //Тут будет выполняться код;
//}

//пример 

//for (let = 0; num < 5; num++) {
//   console.log(num);
//}

/* 
1) Выполняется начало  - let num = 0;
2) Выполняется условие - num < 5; 
3) Если условие true вырлняется тело цикла  - console.log(num);
4) Выполняется шаг - num++
Повтор начинается в пункта 2; 
*/

// Существующая переменная (как вывести переменную внецикла);
//let num;
//for(num=0, num < 5; num++) {
//   console.log(num);
//}
//console.log(`Вывод вне цикла: ${num}`);


// Директива break - как прекратить цикл ;
//let num = 0;
//for (; num < 5; num++) {
//   console.log(num);
 //  if (num == 2) break;
//}
//console.log(`Работа окончена num = ${num}`);

//et num = 0;
//for(; num < 5; num++) {
//   if (num == 2) continue;
//   console.log(num);
//}