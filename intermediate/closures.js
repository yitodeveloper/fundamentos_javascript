function Calculadora(operacion){
    switch(operacion){
        case "suma":
        return function(...num){
            let total = num.reduce(function(acu,n){
                return acu+=n
            },0)
            console.log(`La operación ${operacion} dio como resultado ${total}`)
        }
        break
        case "multiplicar":
        return function(...num){
            let total = num.reduce(function(acu,n){
                return acu*=n
            },1)
            console.log(`La operación ${operacion} dio como resultado ${total}`)
        }
        break
    }
}

let suma = Calculadora("suma")
let multiplicar = Calculadora("multiplicar")

suma(4,5)
multiplicar(4,5)