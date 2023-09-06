const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// components
import { createCharacterCard } from "./components/card/card.js";

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

const BASEURL = "https://rickandmortyapi.com/api/character";

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const response = await fetch(BASEURL + `?page=${page}`);

  if (!response.status === "200") {
    throw new Error("There is an error in the fetch");
  }

  try {
    const json = await response.json();
    const chars = json.results;
    return chars;
  } catch (error) {
    console.log(`${error.status} - ${error.message}`);
  }
}

const characters = await fetchCharacters();
console.log(characters);

characters.forEach((character) => {
  const card = createCharacterCard(character);
  cardContainer.appendChild(card);
});
