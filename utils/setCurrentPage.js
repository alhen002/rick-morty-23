import { fetchCharacters } from "./fetchCharacters.js";

const pagination = document.querySelector('[data-js="pagination"]');

export const setCurrentPage = async (page, name = "") => {
  const { info } = await fetchCharacters(page, name);
  pagination.textContent = `${page} / ${info.pages}`;
};
