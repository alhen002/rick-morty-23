import { fetchCharacters } from "../../index.js";

const pagination = document.querySelector('[data-js="pagination"]');

export const setCurrentPage = async (page, name = "") => {
  const { info } = await fetchCharacters(name);
  pagination.textContent = `${page} / ${info.pages}`;
};
