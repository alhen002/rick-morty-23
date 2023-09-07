import { fetchCharacters } from "./fetchCharacters.js";
import { createCharacterCard } from "../components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

export const renderNewPage = async (page, name) => {
  const { results: characters } = await fetchCharacters(page, name);
  cardContainer.innerHTML = "";
  characters.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.appendChild(card);
  });
};
