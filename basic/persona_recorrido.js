const dias = ['lunes','martes','miércoles','jueves','sábado','domingo']
const nombre = 'Rodri'

function correr() {
    const min = 5
    const max = 15
    return Math.round(Math.random() * (max - min)) + min
}

let totalKms = 0

for (let i=0; i < dias.length; i++) {
    const kms = correr()
    totalKms += kms
    console.log(`El día ${dias[i]} ${nombre} corrió ${kms}kms`)
}

const promedioKms = totalKms / length
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)}kms`)
