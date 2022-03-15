import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const recipe = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`);
      const data = await recipe.json();
      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      setVeggie(data.recipes);
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <div>
      <div className="recipe__meals">
        <h3>
          Our Vegetarian Picks
        </h3>
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem'
        }}>
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="recipe__meals-card">
                  <p>
                    {recipe.title}
                  </p>
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="recipe__meals-gradient" />
                </div>
              </SplideSlide>
            )
          })};
        </Splide>
      </div>
    </div>
  )
}

export default Veggie;