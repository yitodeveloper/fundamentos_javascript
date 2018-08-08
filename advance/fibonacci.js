// Uso de Funciones recursivas
const maxPrint = 20

function fibonacci(num, memoria = {}){

    if(memoria[num]){
        return memoria[num]
    }
    if(num == 1) return 0
    if(num == 2) return 1

    return memoria[num] = fibonacci(num-1, memoria)+fibonacci(num-2, memoria)
}

function fiboPrint(limit){

    for(let i = 1; i<=limit;i++){
        console.log(fibonacci(i))
    }
}


fiboPrint(maxPrint)
