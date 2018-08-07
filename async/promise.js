
function get(URL){
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            const DONE = 4
            const OK = 200
        
            if(this.readyState === DONE){
                if(this.status === OK){
                    resolve(JSON.parse(this.responseText))
                }else{
                    reject(new Error(`Se produjo un error al realizar el request : ${this.status}`))
                }
            }
        }
        
        xhr.open('GET', URL)
        xhr.send(null);
    })
}

function handleError(err){
  console.log(err)
}

let luke

get("https://swapi.co/api/people/1")
    .then(function(response){
        luke = response
        return get(luke.homeworld)
    })
    .then(function(homeworld){
        luke.homeworld = homeworld
        console.log(` ${luke.name} nacio en ${luke.homeworld.name}`)
    })
    .catch(function(err){
      handleError(err)
    })