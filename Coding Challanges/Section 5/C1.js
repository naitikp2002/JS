const tempData = [17, 21, -5, 15, 20, 44];

let str = "...";
for (let i = 0; i < tempData.length; i++) {
  str += `${tempData[i]}'C in ${i + 1} Day...`;
}

console.log(str);
