const cardContainer = document.querySelector('[data-js="card-container"]');

const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// components

//helper functions
import { setCurrentPage } from "./utils/setCurrentPage.js";
import { renderNewPage } from "./utils/renderNewPage.js";
import { fetchCharacters } from "./utils/fetchCharacters.js";
// state
let page = 1;

// start
renderNewPage(page);
setCurrentPage(page);

prevButton.addEventListener("click", async () => {
  if (page > 1) {
    page -= 1;
    setCurrentPage(page, searchBar.query.value);
    renderNewPage(page, searchBar.query.value);
  }
});

nextButton.addEventListener("click", async () => {
  const { info } = await fetchCharacters(page, searchBar.query.value);
  if (page < info.pages) {
    page += 1;
    console.log(info.pages);
    setCurrentPage(page, searchBar.query.value);
    renderNewPage(page, searchBar.query.value);
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
  renderNewPage(page, event.target.query.value);
  setCurrentPage(page, event.target.query.value);
});
