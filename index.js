import { setCurrentPage } from "./components/nav-pagination/nav-pagination.js";
import { renderNewPage } from "./components/nav-button/nav-button.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

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

export async function fetchCharacters(name = "") {
  const response = await fetch(BASEURL + `?page=${page}` + `&name=${name}`);

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
    setCurrentPage(page, searchBar.query.value);
    renderNewPage(searchBar.query.value);
  }
});

nextButton.addEventListener("click", async () => {
  const { info } = await fetchCharacters(searchBar.query.value);
  if (page < info.pages) {
    page += 1;
    console.log(info.pages);
    setCurrentPage(page, searchBar.query.value);
    renderNewPage(searchBar.query.value);
  }
});

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  console.log(event.target.query.value);
  renderNewPage(event.target.query.value);
  setCurrentPage(page, event.target.query.value);
});
