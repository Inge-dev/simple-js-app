let pokemonRepository = (function () {
    let pokemonList = [
        {name: 'Jigglypuff', height: 5, type: ['poison', 'steel']},
        {name: 'Butterfree', height: 10, type: ['rock', 'electric']},
        {name: 'Charmander', height: 6, type: ['ground', 'water']},
    ];
  
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }
  
    return {
      add: add,
      getAll: getAll
    };
  })();

pokemonRepository.add ({ name: 'Rapidash' });
  
pokemonRepository.getAll().forEach(function(pokemon){ // Updated .forEach loop to access pokemonList from within function
    if(pokemon.height > 6){ 
        document.write ("<p>" +  pokemon.name + " height: " + pokemon.height + " type: " + pokemon.type +  " What a big pokemon!" + "<p>");
    }else{
        document.write ("<p>" +  pokemon.name + " height: " + pokemon.height + " type: " + pokemon.type + "<p>");
    }
    });

