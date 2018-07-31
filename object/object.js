
var Persona = {
    init: function Init (nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    },
    envejecer: function Envejecer(anios){
        this.edad += anios
    }
}

p = Object.create(Persona)
p.init("Rodrigo", "Ramirez", 27)
p.envejecer(22)

console.log(`La edad de ${p.nombre} ${p.apellido} es ${p.edad}`)