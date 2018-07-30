
function Personaje(){
    this.posx = 0
    this.posy = 0
}

Personaje.prototype.moverEnX = function moverEnX(x){
    this.posx += x
}

Personaje.prototype.moverEnY = function moverEnY(y){
    this.posy += y
}

Personaje.prototype.printPos = function printPos(){
    console.log(`La posición del personaje esta en (${this.posx},${this.posy})`)
}

const p = new Personaje()

p.moverEnX(10)
p.moverEnX(2)
p.printPos()