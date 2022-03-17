import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const check = localStorage.getItem('popular');

    if(check) {
      setPopular(JSON.parse(check));
    } else {
      const recipe = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
      const data = await recipe.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes))
      setPopular(data.recipes);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <div className="recipe__meals">
        <h3>
          Popular Picks
        </h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem'
        }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="recipe__meals-card">
                  <Link to={`/recipe/${recipe.id}`}>
                  <p>
                    {recipe.title}
                  </p>
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="recipe__meals-gradient" />
                  </Link>
                </div>
              </SplideSlide>
            )
          })};
        </Splide>
      </div>
    </div>
  )
}

export default Popular;