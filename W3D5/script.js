"use strict";

const Person = function (firstName, lastName) {
  // console.log(firstName, lastName);
  this.firstName = firstName;
  this.lastName = lastName;
  // console.log(this);
};

Person.prototype.calcAge = function () {
  console.log(this.firstName, this.lastName);
};
const naitik = new Person("Naitik", "Patel");
const kartik = new Person("Kartik", "Patel");
naitik.calcAge();
kartik.calcAge();
// console.log(naitik);
const arr = [1, 2, 2, 2, 7, 8, 8, 0, 7, 7];

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const bmw = new Car("bmw", 120);
const mercedes = new Car("mercedes", 200);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
