var calculate = function(input){
    if (input < 0 || typeof input === "boolean" || typeof input === "string"){
        return "INVALID INPUT"
    }
    else if (input === 0){
        return 0;
    }
    else if (input === 1){
        return 1;
    }
    else{
        return calculate(input - 1) + calculate(input - 2)
    }
}

module.exports = {
    calculate: calculate
}