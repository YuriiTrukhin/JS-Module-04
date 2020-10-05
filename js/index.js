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
//============ 
