let pokemonList= [
    {name: 'Jigglypuff', height: 5, type: ['poison', 'steel']},
    {name: 'Butterfree', height: 10, type: ['rock', 'electric']},
    {name: 'Charmander', height: 6, type: ['ground', 'water']},
];

for (let i = 0; i < pokemonList.length; i++){
if(pokemonList[i].height > 6){ 
    document.write("<p>" + pokemonList[i].name + " height: " +  pokemonList[i].height +  " - What a big pokemon! " + "</p>");
    //This will add a comment to the largest pokemon
}else{
    document.write("<p>" + pokemonList[i].name + " height: " +  pokemonList[i].height + "<p>");   
    //This will allow the smaller pokemons to be listed with name and height, but no comment
}
}