const palindromes = function (word) {
    word = word.toLowerCase();
    const punctuation = [",", ".", "!"];
    let list = word.split(/[!., ]+/);
    let length = list.length-1;
    const total= list.reduce((total, word) => {
        return total + word;
      }, "");
    console.log(total);
    length = total.length;
    let newWord = "";
    for( let i = length-1; i >= 0;i--){
        newWord = newWord + total[i];
    };
    if (newWord == total){
        return true;
    }
    return false;


};



// Do not edit below this line
module.exports = palindromes;
