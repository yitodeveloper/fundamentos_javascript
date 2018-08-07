let luke

fetch("https://swapi.co/api/people/1")
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        luke = json
        return fetch(luke.homeworld)
    })
    .then(response => response.json())
    .then(function(json){
        luke.homeworld = json
        console.log(` ${luke.name} nacio en ${luke.homeworld.name}`)
    })
    .catch(function(err){
      handleError(err)
    })