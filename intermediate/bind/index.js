class RandomOption{
    constructor(el){
        this.el = el
        this.el.addEventListener('click', this.onClick.bind(this))
    }
    onClick(){
        this.randomize()
    }
    randomize(){
        let names = ["Juan","Pedro","Rodrigo","Pablo","Esteban","Joaquin"]
        var selectedName = names[Math.floor(Math.random()*names.length)]
        console.log(`El nombre ${selectedName}`)
    }
}

const boton = document.getElementById("randomClick")
const miBoton = new RandomOption(boton)