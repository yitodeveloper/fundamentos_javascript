async function getLuke(){
    try{
      const response = await fetch('http://swapi.co/api/people/1/')
      const luke = await response.json
      const responseHomeWorld = await fetch(luke.homeworld)
      luke.homeworld = await responseHomeWorld.json
        console.log(`${luke.name} nació en ${luke.homeworld.name}`)
        }catch(error){
          handleError(error)
      }
  }