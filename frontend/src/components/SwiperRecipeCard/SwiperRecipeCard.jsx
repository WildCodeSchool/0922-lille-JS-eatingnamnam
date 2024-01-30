import "./SwiperRecipeCard.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";
import { NavContext } from "../Contexts/navBarContext";

/**
 *
 * @param {recipe: object}  props - the recipe card that will be displayed in the Swiper component
 * @returns to render the Recipe Card Component
 */

function SwiperRecipeCard({ recipe }) {
  const { setActiveButton, setRecipeID } = useContext(NavContext);
  //  Handles which button is active when a new recipe card is clicked on
  const handleClick = () => {
    setRecipeID(recipe.id);
    setActiveButton("recipe");
  };
  return (
    <Link to={`/recipe/${recipe.id}`} onClick={handleClick}>
      <section className="swiperCard">
        <img
          className="swiperCard__logo"
          src={`${import.meta.env.VITE_BACKEND_URL}${recipe.picture}`}
          alt="une recette de cuisine"
        />

        <section className="testSection">
          <article className="swiperCard__info">
            <h1 className="swiperCard__info__title">{recipe.title}</h1>
            <StarBar className="swiperCard_info__stars" id={recipe.id} />
          </article>

          <section className="swiperCard__stats">
            <div className="swiperCard__stats__div">
              <img
                className="swiperCard__stats__img"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/time.svg`}
                alt="logo time"
              />

              <p className="swiperCard__p">{recipe.time}</p>
            </div>
            <div className="swiperCard__stats__div">
              <img
                className="swiperCard__stats__img"
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/assets/images/toque.svg`}
                alt="logo toque"
              />
              <p className="swiperCard__p">{recipe.difficulty}</p>
            </div>
            <div className="swiperCard__stats__div littleCard__price">
              {recipe.price === 1 && (
                <img
                  className="swiperCard__stats__img"
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/assets/images/euro.svg`}
                  alt="logo euro"
                />
              )}
              {recipe.price === 2 && (
                <>
                  <img
                    className="swiperCard__stats__img"
                    src={`${
                      import.meta.env.VITE_BACKEND_URL
                    }/assets/images/euro.svg`}
                    alt="logo euro"
                  />
                  <img
                    className="swiperCard__stats__img"
                    src={`${
                      import.meta.env.VITE_BACKEND_URL
                    }/assets/images/euro.svg`}
                    alt="logo euro"
                  />
                </>
              )}
              {recipe.price === 3 && (
                <>
                  <img
                    className="swiperCard__stats__img"
                    src={`${
                      import.meta.env.VITE_BACKEND_URL
                    }/assets/images/euro.svg`}
                    alt="logo euro"
                  />{" "}
                  <img
                    className="swiperCard__stats__img"
                    src={`${
                      import.meta.env.VITE_BACKEND_URL
                    }/assets/images/euro.svg`}
                    alt="logo euro"
                  />
                  <img
                    className="swiperCard__stats__img"
                    src={`${
                      import.meta.env.VITE_BACKEND_URL
                    }/assets/images/euro.svg`}
                    alt="logo euro"
                  />
                </>
              )}
            </div>
          </section>
        </section>
      </section>
    </Link>
  );
}
SwiperRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
};

export default SwiperRecipeCard;
