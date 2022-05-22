const repeatString = function(message, iterations) {
    if (iterations <0){return 'ERROR';}
    let word = "";
    for (let i = 0; i < iterations; i++){
        word = word + message;
    }
    return word;

};

// Do not edit below this line
module.exports = repeatString;
