const starWars7 = 'Star Wars: El Despertar de la Fuerza'
const pgStarWars7 = 13

const name = 'Rodrigo'
const age = 28

function canWatchStarWars7(name,age, iswithAdult){
    if(age >= pgStarWars7){
        alert(`${name} puede pasar a ver ${starWars7}`)
    }else if(iswithAdult){
        alert(`${name} puede pasar a ver ${starWars7} Aunque su edad es ${age}, se encuentra acompañada/o por un adulto`)
    }else{
        alert(`${name} no puede pasar a ver ${starWars7} tiene ${age} y necesita tener ${pgStarWars7}`)
    }
}



canWatchStarWars7(name,age)