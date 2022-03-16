import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();

        setCuisine(recipes.results);
    }

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])

    return (
        <div className='recipe__search'>
            {cuisine.map((element) => {
                return (
                    <div className='recipe__search-item' key={element.id}>
                        <img src={element.image} alt={element.title} />
                        <h4>
                            {element.title}
                        </h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Cuisine