const fromDollarToYen = function (valueInDollar){
    let valueInYen = valueInDollar * 127.9
    return valueInYen
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


const fromYenToPound = function (valueInYen){
    let valueInPound = valueInYen * 0.8
    return valueInPound
}
module.exports = { fromDollarToYen , fromYenToPound , fromEuroToDollar };