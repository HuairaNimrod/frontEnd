const requestURL = "https://pokeapi.co/api/v2/pokemon?limit=151"
const card = document.querySelector(".cards")

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const pokemon = jsonObject['results'];
    pokemon.forEach(displayPokemon)

  })
  function displayPokemon(pokemon){

    let h2 = document.createElement('h2');
    h2.textContent = pokemon.name;

    card.appendChild(h3);

    // document.querySelector('div.cards').appendChild(card);
    
  }
  