const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

let higherBMI;
let lowerBMI;

if(BMIMark>BMIJohn)
{
    higherBMI="Mark";
    lowerBMI="John"
}
else{
    higherBMI="John";
    lowerBMI="Mark"
}

console.log(`${higherBMI}'s BMI is higher than ${lowerBMI}'s!`)