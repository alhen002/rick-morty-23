import { fetchCharacters } from "../../index.js";

const pagination = document.querySelector('[data-js="pagination"]');

export const setCurrentPage = async (page) => {
  const { info } = await fetchCharacters();
  pagination.textContent = `${page} / ${info.pages}`;
};
