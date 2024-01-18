// "use strict";

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
// };

// for (const [i, item] of restaurant.categories.entries()) {
//   console.log(i + 1, item);
// }

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // for (const [i, goal] of game.scored.entries()) {
// //   console.log(`Goal ${i + 1}: ${goal}`);
// // }

// // const odds = Object.values(game.odds);
// // let average = 0;
// // for (const odd of odds) average += odd;
// // average /= odds.length;
// // console.log(average);

// for (const [key, value] of Object.entries(game.odds)) {
//   const str = key !== "x" ? `Victory ${key}` : `draw`;
//   console.log(`Odd of ${str}: ${value} `);
// }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers);

// function mask(number) {
//   let str = number + "";
//   const last = str.slice(-4);
//   const answer = last.padStart(str.length, "#");
//   return answer;
// }
// console.log(mask(2345654344434));

// function caseChange(variable) {
//   const varArr = variable.split("_");
//   const newArr = [];
//   for (const v of varArr) {
//     newArr.push(v.toLowerCase());
//   }
//   const ansArr = [];
//   for (let i = 1; i < newArr.length; i++) {
//     let temp = newArr[i].split("");
//     temp[0] = temp[0].toUpperCase();
//     ansArr.push(newArr[0], temp.join(""));
//   }

//   return ansArr.join("");
// }

// // console.log(caseChange("Hello_World"));
// console.log(caseChange("underscore_case"));
// console.log(caseChange("first_name"));
// console.log(caseChange("Some_Variable"));
// console.log(caseChange("calculate_AGE"));
// console.log(caseChange("delayed_departure"));

// function greet(msg) {
//   return function (name) {
//     console.log(`${msg} ${name}`);
//   };
// }

// const greeter = greet("hayyyy");
// greeter("Naitik");
// greeter("Kartik");

// greet("Good morning")("Naitik");

const resumeNaitik = {
  name: "Naitik Patel",
  age: "21",
  role: "reactjs",
  exp: 2,
  skills: [],
  addSkill: function (skill, domain) {
    console.log(
      `${this.name} is ${this.age} year old and experties in ${this.role} since ${this.exp} years`
    );
    this.skills.push({ skill, domain });
    console.log(this.skills);
  },
};

resumeNaitik.addSkill("JS", "Web Dev");
resumeNaitik.addSkill("React.JS", "Designer");

const kartikResume = {
  name: "kartik",
  age: "21",
  exp: 2,
  skills: [],
};

const add = resumeNaitik.addSkill;
add.call(kartikResume, "react", "designer");
// console.log(kartikResume);

add.apply(resumeNaitik, ["CSS", "web design"]);
console.log(resumeNaitik);

const addKp = add.bind(kartikResume);
addKp("hello", "commu");
addKp("GDSC", "Networking");
addKp("typing", "Data");
console.log(kartikResume);

// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//     typeof answer === "number" &&
//       answer < this.options.length &&
//       this.answers[answer]++;
//     console.log(this.answers);
//   },
// };

// poll.registerNewAnswer();

// Closures

function outerFunc() {
  let counter = 0;
  return function () {
    console.log(`Count ${counter++}`);
  };
}

const innerFunc = outerFunc();
innerFunc();
innerFunc();
innerFunc();
innerFunc();

const arr = ["a", "b", "c", "d", "e", "f"];

console.log(arr);
// console.log(arr.slice(1, 3));
// console.log(arr.splice(1, 3));
// console.log(arr.reverse());
console.log(arr.concat(["g", "h", "i"]));
console.log(arr);
