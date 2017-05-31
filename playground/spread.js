// function add(a, b){
//     return a + b;
// };

// console.log(add(3,1));


// var toAdd = [9, 1];
// add(toAdd[0], toAdd[1]); //dalam bentuk array

// console.log(add(...toAdd));

// Jadi Spread adalah (...) => titik tiga

// var groupA = ['Panji', 'Qipli', 'Rendi'];
// var groupB = ['Riefqi', 'Dimas'];

// var final = [...groupB,5,...groupA];

// console.log(final);

var person = ['Faza', 27];
var personTwo = ['Qipli', 26];

function greet (name, age){
    console.log('Hi ' + name + ', you are ' + age);
};

greet(...person);
greet(...personTwo);

// hi faza, you are 27

var names = ['Mike', 'Ben'];
var final = ['Faza', ...names];
// hi, Faza

final.forEach(function(name){
    console.log('Hi, ' + name );
})