import "./Search.scss";
import { useState, useEffect } from "react";
import SearchRecipeCard from "../../components/SearchRecipeCard/SearchRecipeCard";

/**
 * @returns  The search page component displaying a list of recipes based on the user
 */

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [recipes, setRecipes] = useState("");

  // fetch of all recipes
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/recipe`)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);

  //  function to handle input change in the search bar
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <main className="page_search">
      <search className="searchBar">
        <input
          onChange={handleChange}
          list="searchedRecipe"
          value={searchInput}
          className="searchBar__form"
          type="search"
          placeholder="Rechercher une recette..."
          label="Rechercher une recette..."
        />
      </search>
      <section id="searchedRecipe" className="cardContainer">
        {recipes &&
          recipes.map((recipe) =>
            recipe.title.toLowerCase().includes(searchInput) ? (
              <SearchRecipeCard key={recipe.id} recipe={recipe} />
            ) : (
              ""
            )
          )}
      </section>
    </main>
  );
}

export default Search;
