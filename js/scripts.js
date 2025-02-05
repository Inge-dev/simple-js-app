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

    function showDetails(pokemon) {
      console.log(pokemon.name)
    }

    function addListItem(pokemon) {
      let pokemonListElement = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('pokemon-button');
      listItem.appendChild(button);
      pokemonListElement.appendChild(listItem);
      button.addEventListener('click', function () {
          showDetails(pokemon);
      });
    }
  
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();

pokemonRepository.add ({ name: 'Rapidash' });

pokemonRepository.getAll().forEach(function(pokemon){ 
  pokemonRepository.addListItem(pokemon);
});

 