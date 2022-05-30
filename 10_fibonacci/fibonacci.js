const fibonacci = function(number) {
    number = parseInt(number);
    if (number < 0){return "OOPS"}
    if (number == 1){return 1};
    current = 1;
    total = 1;
    lastNum = 0;
    for (let i = 2; i <= number; i++){
        current = total;
        total = total + lastNum;
        lastNum = current;

    }
    return total;
};
// console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
