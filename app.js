const oneEuroIs ={
    "JP": 127.9,
    "USD": 1.2,
    "GBP": 0.8
}

const fromDollarToYen = function (valueInDollar){

    return Math.floor((valueInDollar * oneEuroIs.USD)*oneEuroIs.JP) 
    
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    
     return  valueInEuro * oneEuroIs.USD;
   
}


const fromYenToPound = function (valueInYen){
    return (valueInYen*oneEuroIs.GBP)/oneEuroIs.JP
    
}
module.exports = { fromDollarToYen , fromYenToPound , fromEuroToDollar };

