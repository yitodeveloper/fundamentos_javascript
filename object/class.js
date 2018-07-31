class Coche{
    constructor(marca,modelo){
        this.marca = marca
        this.modelo = modelo
        this.velocidad = 0
    }

    acelerar(){
        this.velocidad++;
    }
}

c = new Coche("subaru","tribeca")
c.acelerar()
c.acelerar()
console.log(`La velocidad actual es ${c.velocidad}`)