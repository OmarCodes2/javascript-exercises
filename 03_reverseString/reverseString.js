const reverseString = function(word) {
    
    let len = word.length - 1;
    let finalWord = "";
    
    for (let i = len; i >= 0; i--) {
        console.log(i);
        console.log(word[i]);
        
        finalWord = finalWord + word[i];
        console.log(finalWord);
        
    }
    return finalWord;

};


// Do not edit below this line
module.exports = reverseString;
