// Fetch
//
// POST
 
const BASE_URL = 'https://pokeapi.co/api/v2/';
 
// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/
// fetch async
 
const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}
 
// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name);
 
        renderPokemonCard(pokemon);
    })
 
document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);
    //renderPokemonCard(pokemon);
})
 
// obtener el anterior
//
//
// obtener el siguiente
 
document.getElementById('previous-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = Math.max(1, currentPokeId -1);
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon.name);
        renderPokemonCard(pokemon);
    })
 
document.getElementById('next-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = currentPokeId + 1;
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon);
        renderPokemonCard(pokemon);
    })
 
 
 
////////////////// POST
//
 
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json))
 
// Función para renderizar la tarjeta del Pokémon en el DOM
const renderPokemonCard = (pokemon) => {
    const cardContainer = document.getElementById('pokemon-card-container');
 
    // Crear elementos para la tarjeta
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
 
    const nameElement = document.createElement('h3');
    nameElement.textContent = pokemon.name;
 
    const imageElement = document.createElement('img');
    imageElement.src = pokemon.sprites.front_default;
    imageElement.alt = pokemon.name;
 
    // Agregar elementos a la tarjeta
    card.appendChild(nameElement);
    card.appendChild(imageElement);
 
    // Agregar tarjeta al contenedor en el DOM
    cardContainer.appendChild(card);
}
 
 
/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch
 