import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Popular() {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const recipe = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
    const data = await recipe.json();
    setPopular(data.recipes)
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
              <SplideSlide key={recipe.title}>
                <div className="recipe__meals-card">
                  <p>
                    {recipe.title}
                  </p>
                  <img src={recipe.image} alt={recipe.title} />
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