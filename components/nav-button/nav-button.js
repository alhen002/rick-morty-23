import { fetchCharacters } from "../../index.js";
import { createCharacterCard } from "../card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

export const renderNewPage = async (name) => {
  const { results: characters } = await fetchCharacters(name);
  cardContainer.innerHTML = "";
  characters.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.appendChild(card);
  });
};
