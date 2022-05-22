const removeFromArray = function(list) {
    let args = [].slice.call(arguments);
    args.shift();
    len = args.length;
    
    if (len == 0){
        return list;
    }
    
    for (let i = 0; i < len; i++){
        console.log(args[i]);

        pos = list.indexOf(args[i]);
        if (pos != -1){
           list.splice(pos,1); 
        }    
        

    }
    return list;

};
console.log(removeFromArray([1,2,3,4]));
// Do not edit below this line
module.exports = removeFromArray;
