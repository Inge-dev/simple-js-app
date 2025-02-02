let pokemonList= [
    {name: 'Jigglypuff', height: 5, type: ['poison', 'steel']},
    {name: 'Butterfree', height: 10, type: ['rock', 'electric']},
    {name: 'Charmander', height: 6, type: ['ground', 'water']},
];

pokemonList.forEach(function(pokemon){
if(pokemon.height > 6){ 
    document.write ("<p>" +  pokemon.name + " height: " + pokemon.height + " type: " + pokemon.type +  " What a big pokemon! " + "<p>");
}else{
    document.write ("<p>" +  pokemon.name + " height: " + pokemon.height + " type: " + pokemon.type + "<p>");
}
});


  