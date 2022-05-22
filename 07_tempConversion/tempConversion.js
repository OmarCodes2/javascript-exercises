const ftoc = function(temp) {
  temp = (temp-32) * (5/9);
  let n = temp.toFixed(1);
  return parseFloat(n);
};

const ctof = function(temp) {
  temp = (temp*(9/5))+32;
  let n = temp.toFixed(1);
  return parseFloat(n);
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
