/* Write your code below. Good luck! 🙂 */



// const calcAverage=(s1,s2,s3)=>{
//     let avg=(s1+s2+s3)/3;
//     return avg;
// }

// const checkWinner=(teamK,teamD)=>{
//     if(teamK>=2*teamD)
//     {
//         return `Koalas`;
//     }
//     else if(teamD>=2*teamK)
//     {
//         return `Dolphins`;
//     }
//     else{
//         return '';
//     }
// }

// let scoreDolphins=calcAverage(44,23,71);
// let scoreKoalas=calcAverage(65,54,49);
// console.log(checkWinner(scoreKoalas,scoreDolphins)? `${checkWinner(scoreKoalas,scoreDolphins)} win` : `No team wins...`);



//-----------challenge -1---------------


const calcAverage = (a,b,c) => (a+b+c)/3;

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas  = calcAverage(65,54,49);

const checkWinner = (avgDolophins,avgKoalas)=>{
    if(avgDolophins>=(2*avgKoalas)){
        console.log(`Dolphins win( ${avgDolophins} vs ${avgKoalas})`);
    }
    else if((avgDolophins*2)<=avgKoalas) {
        console.log(`Koalas win( ${avgKoalas} vs. ${avgDolophins})`);
    }
    else {
        console.log("no team wins");
    }
};

checkWinner(scoreDolphins,scoreKoalas);


//-----------challenge -2---------------


