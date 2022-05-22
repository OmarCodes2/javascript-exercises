const ftoc = function(temp) {
  temp = (temp-32) * (5/9);
  if (temp + 1.0 != temp.toFixed(1) + 1.0){
    temp = temp.toFixed(1);
  }
  console.log(temp+1.0);
  console.log(temp.toFixed(1));
  return temp;
};

const ctof = function(temp) {
  temp = (temp*(9/5))+32;
  if (temp + 1.0 != temp.toFixed(1) + 1.0){
    temp = temp.toFixed(1);
  }
  console.log(temp+1.0);
  return temp;
};

console.log(ftoc(32))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
