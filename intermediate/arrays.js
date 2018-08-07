/*
    Uso de reduce, map, push y filter en arrays
*/

function sumar(...numeros){
    return numeros.reduce(function(acu,n){
        return acu+n
    },0)
}

function doblar(...numeros){
    return numeros.map(function(n){
        return n*n
    })
}

function pares(...numeros){
    return numeros.filter(function(n){
        if(n%2 == 0){
            return n
        }
    })
}

sumar(5,6,7,8)
doblar(4,6,8)
pares(2,3,4,5,6)