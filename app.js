

const sum= (a,b) => {
    return(a+b)
}
console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}



const fromDollarToYen = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInYen = ((valueInEuro/1.07)*156.5);
    // Retornamos el valor en dólares
    return valueInYen;
}

const fromYenToPound = function(valueInEuro){
    let valueInPound = ((valueInEuro/156.5)*0.87);

    return valueInPound;
}


console.log(fromYenToPound(3))
console.log(fromDollarToYen(1))
console.log(fromEuroToDollar(2))




module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};