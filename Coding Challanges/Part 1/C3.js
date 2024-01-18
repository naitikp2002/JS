/* Write your code below. Good luck! 🙂 */

let scoreDolphins1= 96;
let scoreDolphins2= 108;
let scoreDolphins3= 89;

let scoreKoalas1= 88;
let scoreKoalas2= 91;
let scoreKoalas3= 110;

if(scoreKoalas3 + scoreKoalas2 + scoreKoalas1 > scoreDolphins3 + scoreDolphins1 + scoreDolphins2){
    console.log("Koalas win the trophy");
}
else if(scoreKoalas3 + scoreKoalas2 + scoreKoalas1 == scoreDolphins3 + scoreDolphins1 + scoreDolphins2){
    console.log("Both win the trophy");
}
else{
    console.log("Dolphins win the trophy");
}