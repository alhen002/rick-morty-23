import { fetchCharacters } from "../../index.js";
import { createCharacterCard } from "../card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

export const renderNewPage = async () => {
  const { results: characters } = await fetchCharacters();

  characters.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.appendChild(card);
  });
};
