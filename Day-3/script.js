// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

let language;
language= "Hindi";
const country= "INDIA";
const continent= "ASIA";

// country="BHARAT";
console.log(country);


// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population, 
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than 
// Finland?
// 4. The average population of a country is 33 million people. Does your country 
// have less people than the average country?
// 5. Based on the variables you created, create a new var iable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million 
// people speak portuguese'

let population= 1480;
let Finland= 6;

console.log(population/2,population/2);
console.log(population + 1);
console.log("Does Finland has more population than INDIA?"+ population>Finland);
console.log("Does INDIA has more population than average population of all country"+ population>33);
console.log(`${country} is in ${continent}, and its ${population} 
people speak ${language} which has population of Millions`)


// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the 
// console: 'Portugal's population is above average'. Otherwise, log a string like 
// 'Portugal's population is 22 million below average' (the 22 is the average of 33 
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to 
// 130. See the different results, and set the population back to original

console.log(`${population < 33 ? "Portugal's population is above average": "Portugal's population is " + `${population -33}` +" million below average"} `);

// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';             4
// '19' - '13' + '17';            617
// '19' - '13' + 17;          23
// '123' < 57;          false
// 5 + 6 + '4' + 9 - 4 - 2;         1143
// 2. Execute the operations to check if you were right

