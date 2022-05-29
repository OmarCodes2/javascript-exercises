const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	
  return numOne - numTwo;
};

const sum = function(list) {

	const summ = list.reduce((sum, element)=>{
    return sum = sum + element;
  }, 0);
  return summ;
};

const multiply = function(list) {
  const summ = list.reduce((sum, element)=>{
    return sum = sum * element;
  }, 1);
  return summ;
};

const power = function(numOne, numTwo) {
	return numOne ** numTwo;
};

const factorial = function(num) {
  let total = 1;
  for (let i = 1; i<num+1; i++){
    total = total*i;
  };
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
