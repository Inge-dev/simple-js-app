let pokemonRepository = (function () {
    let pokemonList =[];
    
  
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';


    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }

    function addListItem(pokemon) {
      let pokemonListElement = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li');
      listItem.classList.add('list-group-item'); 

      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('btn', 'btn-primary');
      button.addEventListener('click', function () {
          showDetails(pokemon);
      });

      listItem.appendChild(button);
      pokemonListElement.appendChild(listItem);

    }

    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    function showModal(title, text, img) {
      let modalBody = document.querySelector(".modal-body");
      let modalTitle = document.querySelector("#pokemonModalLabel");

      let pokemonHeight = document.querySelector("#pokemonHeight");
      let pokemonImage = document.querySelector("#pokemon-img");

      modalTitle.innerText = title;
      pokemonHeight.innerText = text;
      pokemonImage.setAttribute('src', img);
    }

    function showDetails(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        showModal(
          pokemon.name,
          "Height: " + pokemon.height,
          pokemon.imageUrl
        );
        $('#pokemonModal').modal('show');
      });
    }

    return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      loadDetails: loadDetails,
      addListItem: addListItem,
      showModal: showModal
    };
  })();

pokemonRepository.loadList().then(function() {

  pokemonRepository.getAll().forEach(function(pokemon){ 
    pokemonRepository.addListItem(pokemon);
  });
});

 