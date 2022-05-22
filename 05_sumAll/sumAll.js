const sumAll = function(no1, no2) {
    let finalNo = 0;
    
    if (no1>no2){
        [no1, no2] = [no2, no1];
    }

    if(no1 < 0 || no2< 0){
        return 'ERROR';
    }

    if(typeof no1 != 'number' || typeof no2 != 'number'){
        return 'ERROR';
    }

    for (let i = no1; i < no2+1; i++){
        finalNo = finalNo + i;
        
    }
    return finalNo;
};

console.log(sumAll(2,6));

// Do not edit below this line
module.exports = sumAll;
