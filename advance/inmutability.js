
let persona = {
    nombre: "Pedro",
    apellido: "Perez",
    edad: 24
}

let badClone = persona

console.log(persona === badClone)

let goodClone = Object.assign({},persona) // Agrega inmutabilidad del objeto persona, el nuevo objeto no apunta al objeto de origen

console.log(persona === goodClone)