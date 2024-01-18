/* Write your code below. Good luck! 🙂 */

let bills=[125,555,44];
const tip=[];
const calcTip=(bills)=>{
    
    for(let i=0; i<bills.length;i++){
        tip.push(bills[i]>=50 && bills[i]<= 300 ? 0.15*bills[i] : 0.2*bills[i]);
    }
    return tip;
}

console.log(calcTip(bills));