// console.log(Math.sqrt(25));
// console.log(36 ** (1 / 2));

const randomInt = (min, max) => {
  const randomNum = Math.trunc(Math.random() * (max - min) + min);
  return randomNum;
};
console.log(randomInt(100000, 999999));

console.log(Math.round(23.5));

const current = new Date();
console.log(current.getMinutes());
const date = current.getDate();
const month = `${current.getMonth() + 1}`.padStart(2, 0);
const year = current.getFullYear();
const hour = current.getHours();
const min = current.getMinutes();
const second = current.getSeconds();

const str = `${date}/${month}/${year}`;
console.log(str);
