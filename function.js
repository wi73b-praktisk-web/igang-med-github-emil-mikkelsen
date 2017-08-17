
// hello();

// function hello() {
//     console.log("hello...");
// }
//-------------------------------------------------------------------------------
// sayHello('Ismand');

// function sayHello(who) {
//     console.log('hello', who);
// }

// sayHello('Derb');
//-------------------------------------------------------------------------------
// var sayHey = function sayHey(value) {
//     console.log(value);
// }
// sayHey('tester');
//-------------------------------------------------------------------------------
// function fuldeNavn(forNavn, efterNavn, aarstal) {
//     console.log(forNavn, efterNavn, aarstal);
// }
// fuldeNavn('Emil', 'Mikkelsen', 26 + ' september ' + 1997);
//-------------------------------------------------------------------------------
// function add(tal1, tal2) {
//     console.log(tal1 + tal2);
// }
// plus(3,5);
//-------------------------------------------------------------------------------
// var result = 0;
// function add(tal) {
    // result = result + tal;
//     result += tal;
// }

// function sub(tal){
//     result -= tal;
// }

// function multi(tal) {
//     result *= tal;
// }

// function divi(tal) {
//     result /= tal;
// }
// add(5);
// add(8);
// console.log(result);
// sub(4);
// console.log(result);
// multi(2);
// console.log(result);
// divi(3);
// console.log(result);
//---------------------------------------------------------------
// var sayHeyAnonym = function (value) {
//     console.log(value); // Udskriver "test af anonym function"
// }
// sayHeyAnonym('test af anonym funktion');
//---------------------------------------------------------------

// var str = "Hej jeg er lorem ipsum, og jeg skal bare fulde lidt, håber det er okay";
// function afkort(tekst) {
//     return tekst.substr(0, 20)
//     // return tekst;
// }
// console.log(afkort(str));/*arrgument står inde i () i en function*/
//---------------------------------------------------------------
// var profil = function (p) {
//     return p[0] + "\n" + p[1] + "\nFødt " + p[2]; // Returnerer tekst-strengen "Anders Fogh: Født 1957"
// }

// var idol = ["Anders", "Fogh", 1957];

// console.log(profil(idol)); // Udskriver "Anders Fogh: Født 1957"
// ---------------------------------------------------------------
// var dato = new Date();
// console.log(dato);
// var birthday = new Date("11/02/57")

// console.log(dato.getFullYear() - birthday.getFullYear());
//----------------------------------------------------------------
// let eurokurs = function (kurs) {
//     return function (kroner) {
//         return kroner / kurs;
//     }
// }

// let omregning = eurokurs(7.51);
// console.log('kr.', omregning(100).toFixed(2));
// console.log('kr.', omregning(500).toFixed(2));
//----------------------------------------------------------------
// function calculator() {
//     var result = 0;
//     return {
//         add: function (x) {
//             result += x;
//         },
//         sub: function (x) {
//             result -= x;
//         },
//         result: function () {
//             return result;
//         },
//         multi: function (x) {
//             result *= x;
//         },
//         divi: function (x) {
//             result /= x;
//         },

//     }
// }

// var calc = calculator();
// calc.add(2);
// calc.add(5);
// calc.add(3);
// calc.sub(4);
// calc.multi(2);
// calc.divi(3)
// console.log(calc.result());

// array.forEach(function(element) {
    
// }, this);