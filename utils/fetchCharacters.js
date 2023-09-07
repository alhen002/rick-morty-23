const BASEURL = "https://rickandmortyapi.com/api/character";

export async function fetchCharacters(page, name = "") {
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
