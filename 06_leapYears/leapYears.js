const leapYears = function(num) {
    if(num%4 == 0 ){

        if(num%100 == 0 && num%400 == 0){
            return true;
        }else if(num%100 != 0){
            return true;
        }else{
            return false;
        }

    }else{
        console.log(num%400);
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
