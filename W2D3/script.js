"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

for (const [i, item] of restaurant.categories.entries()) {
  console.log(i + 1, item);
}

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// for (const [i, goal] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${goal}`);
// }

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

for (const [key, value] of Object.entries(game.odds)) {
  const str = key !== "x" ? `Victory ${key}` : `draw`;
  console.log(`Odd of ${str}: ${value} `);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

function mask(number) {
  let str = number + "";
  const last = str.slice(-4);
  const answer = last.padStart(str.length, "#");
  return answer;
}
console.log(mask(2345654344434));

function caseChange(variable) {
  const varArr = variable.split("_");
  const newArr = [];
  for (const v of varArr) {
    newArr.push(v.toLowerCase());
  }
  const ansArr = [];
  for (let i = 1; i < newArr.length; i++) {
    let temp = newArr[i].split("");
    temp[0] = temp[0].toUpperCase();
    ansArr.push(newArr[0], temp.join(""));
  }

  return ansArr.join("");
}

// console.log(caseChange("Hello_World"));
console.log(caseChange("underscore_case"));
console.log(caseChange("first_name"));
console.log(caseChange("Some_Variable"));
console.log(caseChange("calculate_AGE"));
console.log(caseChange("delayed_departure"));

function greet(msg) {
  return function (name) {
    console.log(`${msg} ${name}`);
  };
}

const greeter = greet("hayyyy");
greeter("Naitik");
greeter("Kartik");

greet("Good morning")("Naitik");

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
console.log(kartikResume);

add.apply(resumeNaitik, ["CSS", "web design"]);
console.log(resumeNaitik);

add.bind(resumeNaitik, "hello", "commu");
console.log(resumeNaitik);
