"use strict";
// function outerScope() {
//   let birthyear = 2002;
//   let age = 2037 - birthyear;

//   const printAge = () => {
//     console.log(`you are ${age}, born in ${birthyear}.`);
//   };
//   printAge();

//   if (age > 0) {
//     const AgeString = "21";
//     console.log(AgeString);
//     // console.log(x);
//   }
// }
// outerScope();

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

// const res2 = Object.assign({}, restaurant);
// res2.name = "ABC";
// res2.categories.push("Hello");
// console.log(restaurant, res2);

const [x, y] = restaurant.categories;
console.log(x, y);
