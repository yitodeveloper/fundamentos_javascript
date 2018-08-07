
const Human = {
    name : "Rodrigo",
    lastname : "Ramirez"
}


function HelloHuman(repeat){
    for(let i = 0; i<repeat; i++){
        console.log(` Hello ${this.name} ${this.lastname}. Are you a Human?`)
    }
}


HelloHuman(6) // El contexto de this esta en windows se llama a windows.name y windows.lastname
HelloHuman.call(Human,6) // La primera variable determina el scope donde se ejecutara la función 
HelloHuman.apply(Human,[6]) // Realiza lo mismo que la función call pero se diferencia que en vez de recibir diversos parametros solo recibe un array con los valores del los parametros
