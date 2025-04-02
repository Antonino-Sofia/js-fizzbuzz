console.log("Antonino");

// Cosa Voglio fare
//scrivere un ciclo for che parte da 1 e arriva a 100
//se è divisibile per 3 stampo fizz, se per 5 stampo buzz, se è divisibile per 3 e 5 stampo fizzbuzz

for (let index = 1; index <= 100; index++) {}
//
let result = "";
if (index % 3) result += "Fizz";
if (index % 5) result += "Buzz";
console.log(result || index);
//
for (let index = 1; index <= 100; index++) {}
//
const isDivByFive = index % 5 === 0;
const isDivByThree = index % 3 === 0;

if (isDivByFive && isDivByThree) {
}
console.log("FizzBuzz");{
}
else if (isDivByFive){
}
console.log ('Fizz');

else if (isDivByThree) {
    console.log('Buzz');
  } else {
    console.log(index);
  }


