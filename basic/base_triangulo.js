
let base = 5
let height = 7

let triangleArea = (base, height) => base * height/2

/*
    Cómo se puede declarar una función

    function Sumar(a,b){
        return a+b
    }

    let sumar = function (a,b){
        return a+b
    }

    let sumar = (a,b) => a+b
*/


console.log(`
    El area del triangulo de base ${base} y Altura ${height} es ${triangleArea(base, height)}
`)