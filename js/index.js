// const filter = function(array, test) {
//     const filteredElements = [];
  
//     for (const element of array) {
//       const passed = test(element);
  
//       if (passed) {
//         filteredElements.push(element);
//       }
//     }
  
//     return filteredElements;
//   };
  
//   const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ];
  
//   const freshFruits = filter(fruits, fruit => fruit.isFresh);
//   console.log(freshFruits); // массив с объектами apples и bananas
  
//   const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
//   console.log(fruitsWithAmount); // массив с объектами apples и grapes

// ============================ модуль 4
// const askName = function (nsg) {
//   let name = prompt("what's your name?");

//   console.log(nsg + name);
// }


// const greeting = function (callback) {
//   let msg = "Hello, my name is: ";
//   callback(msg);

// }

// greeting(askName);

//=========== задача в масивв идут много объектов через колбек

// const callback = function (a,b){
//   const obj = {a, b}
//   console.log(obj);
//   mass.push(obj)  
// }

// let mass = [];
// console.log(mass);

// const formatOrder = function (name,price,callback) {    
//   callback(name,price)
    
// }
// formatOrder("Burger",25,callback)
// formatOrder("Car",2,callback)
// formatOrder("Mobile",5,callback)

//================ вторая задача вывести в 
// const greeting = function (buddy) {
// const hi ="Wellcome" + ` ${buddy}`;
// console.log(hi);
// }

// const showName = function (greeting) {
// let name = prompt("What is your name");
// greeting(name)
// }
// showName(greeting)
//======================== задача Если стоимость машины меньше money вывести массив машин которые вы можете приобрести
// let money = 85;

// let cars = [
// {name:'ferrari', cost: 100},
// {name:'lambo', cost: 90},
// {name:'bmw', cost: 80},
// {name:'subaru', cost: 60}
// ]
// const filteredElements = [];

// const filter = function(mymoney,mycars) {
// for (let i=0; i<mycars.length; i++){  
// if (mymoney >= mycars[i].cost) {
// filteredElements.push(mycars[i]);
// }
// }
// }
// const auto = function (a,b,filter){
//   filter(a,b)
//   console.log(filteredElements);
// }
// auto(money,cars,filter)
//============ // Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// Например:
// sum(1)(2) = 3
// sum(5)(-1) = 4
//============= решение
// const sum = function(n1) {
      
//     return function add (n2) {
//       console.log(n1+n2);
//     };
//   };

//   sum(1)(2)


//============================= 1)Напишите ф-цию которая юудет создавать массив машин(оъектов).
// 2)Как только длина массива достигает 5 - масив очищается а обьекты передаються в глобальный массив всех машин.
// 3)Добавте несколько методов: скидка на машину, добавление года к названию.
// const shopCar = function() {
//     let list = [];
    
//     const addCar = function (name,price,color) {
//         list.push({name,price,color})
        
//         if(list.length >5 ){
//             console.log(list.splice(0,5));
//         }
//     }
//     const addYear = function (name,year) {
//         for (let i=0; i<list.length; i++) {
           
//          if(list[i].name === name) {
//              list[i].year = year
//          }   
//         }        
//     }
//     const disc = function (n) {
//         for (let el of list) {
//             el.price = el.price-(el.price*n)/100 ; 
//         }
//     }
    
//     const showCars = function () {
//         console.log(list);
//     }
//     const clearCart = function (){
//         list =[]
//     }
//     return {addCar,disc,showCars,clearCart,addYear}
// }
// let takeCar = shopCar();
// takeCar.addCar("BMW", 10, "blue")
// takeCar.addCar("Volvo", 60, "yellow")
// takeCar.addCar("BMW", 100, "blue")
// takeCar.addYear("BMW", 1999)
// takeCar.addCar("Volvo", 60, "yellow")
// takeCar.addCar("BMW", 100, "blue")
// takeCar.addYear("BMW", 1999)
// takeCar.showCars()
// takeCar.disc(10)
// takeCar.clearCart()
// takeCar.showCars()
// const temperatures = [18, 14, 12, 21, 17, 29];

// const min = Math.min(...temperatures); // 12
// console.log(min);

// Петя бежит быстро, потому что Петя пытается поймать поезд.
// function fn() {
//     console.log(this);
//   }
  
//   fn(); // window без "use strict" и udefined с "use strict"
//================================== Практика
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
// let ladder = {
//   step:0,
//   up(n) {
//     this.step = n+1 ;
    
//     return this
   
//   },
//   down(n) {
//     this.step = n-1;
//     return this
   
//   },
//   showStep: function() { // показывает текущую ступеньку
//     console.log( this.step );
//     return  this

//   }
// };
// // Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// // Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up(1).down(1).showStep()
//==========================================================
//  
//Однако, его вызов приводит к ошибке. Почему?
//Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }
//   let user = {
//     name: 'Вася',
//     loginOk() {
//       alert(`${this.name} logged in`);
//     },
//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },
//   };
//   askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//=====================задача
//Дан массив с числами(Написать самим). Ваша ф-я возвращает среднее арифметическое его элементов
// const mass = [112,3,4,5,]
// const check = function (array){
//     let result =0
//     let it = 0
//     for(let el of array) {
//     result = result + el;
//     it = result/array.length;  
// }
// return it
// }
// console.log(check(mass));

//Напишите функцию f, которая будет обёрткой вокруг другой функции g. Функция f обрабатывает первый аргумент сама, а остальные аргументы передаёт в функцию g, сколько бы их ни было.
//Например:

// ================================ задача вставить уникальные значения

// const numbers = [1,2,1,4];


// const fn = function (array){
//     let number = [];
    
//     for(let el of array) {
//         if(!number.includes(el)){
//         number.push(el)            
//         }    
//    }
// return number
// }
// console.log(fn(numbers));
// ====================== задача
// Cоздайте ф-ю конструктор, ItemToSale принимающую параметрами (size, type, color)
//  и содержащую метод для ведения статистики продаж saveToSatatistics.
// let statstics = {
//     soldGenaral: 0,
//     soldTshirts: 0,
//     soldJackets: 0
// }
// ============================================ решение
// let statstics = {
//     soldGenaral: 0,
//     soldTshirts: 0,
//     soldJackets: 0
// }

// function ItemToSale (size, type, color) {    
//     this.color = color;
//     this.size = size;
//     this.type = type;
//     this.saveToSatatistics= function (){
//        if (this.type === "Tshirt") {
//         statstics.soldTshirts +=1
//        }
//        if (this.type === "Jacket") {
//         statstics.soldTshirts +=1
//        }
//        statstics.soldGenaral = statstics.soldTshirts+statstics.soldTshirts
//     }
// }
//  let item = new ItemToSale(10,"Jacket","blue");

//  console.log(item);
//  console.log(item.saveToSatatistics("Tshirt"));
//  console.log(statstics);
// ============================== задача
// Напишите ф-цию конструктор, которая будет создавать избирателя (name);
// У избирателя будет метод vote(presidentName) который будет менят глобальный объект
//  статистики голосов и добавлять туда ключ (имя избирателя) и значение (имя президента).
// Один избиратель голосует только один раз(!)
// В конце подсчитайте голоса и определите кто выиграл выборы
 
// let statistic = {    
    
// }

// function Name (name,vote,hisPresident) {
//     this.name = name;
//     this.vote = vote;
//     this.hisPresident = hisPresident;
//     this.voteToStat = function () {
//         if() {        
//         statistic[name] = this.hisPresident;
//         statistic.vote += 1
//         }

        
        
//     }
// }
// let item = new Name ("Vasya", 1, "Obama")
// let item = new Name ("Petya", 1, "Bush")

// console.log(item.voteToStat());
// console.log(statistic);
//======================================= задача

// Напишите функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
// Ниже вы можете посмотреть работу кода:

// function Accumulator (value) {
//     this.value = value;
  
//     this.read = function(){
//         this.value += + +prompt("Введите номер");

//     }
// }

// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений
//=========================================== задача
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:

function Calculator (value) {
    this.value = value;
    this.item = 0;
    this.itemTwo = 0;
    this.summ = 0;
    this.calculate = function(arr){
        this.value = arr.split(" ");
        this.item = this.value[0]
        this.itemTwo = this.value[2]
        if (this.value[1]==="+"){
        this.summ = +this.item + +this.itemTwo
       
        }
        if (this.value[1]==="*"){
            this.summ = +this.item * +this.itemTwo
            
            }
            return this.summ
               
    }
    this.addMethod = function(name, func){

    }
}

let calc = new Calculator();
alert( calc.calculate("3 + 7") ); // 10

// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 * 3");
alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
