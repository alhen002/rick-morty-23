import { setCurrentPage } from "./components/nav-pagination/nav-pagination.js";
import { renderNewPage } from "./components/nav-button/nav-button.js";

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

const BASEURL = "https://rickandmortyapi.com/api/character";

// States
const maxPage = 42;
export let page = 1;
const searchQuery = "";

export async function fetchCharacters() {
  cardContainer.innerHTML = "";
  const response = await fetch(BASEURL + `?page=${page}`);

  if (!response.status === "200") {
    throw new Error("There is an error in the fetch");
  }

  try {
    const json = await response.json();
    const { info, results } = json;
    return { info, results };
  } catch (error) {
    console.log(`${error.status} - ${error.message}`);
  }
}
renderNewPage();
setCurrentPage(page);

prevButton.addEventListener("click", async () => {
  if (page > 1) {
    page -= 1;
    setCurrentPage(page);
    renderNewPage();
  }
});

nextButton.addEventListener("click", async () => {
  if (page < 42) {
    page += 1;
    setCurrentPage(page);
    renderNewPage();
  }
});
