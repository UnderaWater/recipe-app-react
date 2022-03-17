import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Searched() {
    const [searchResult, setSearchResult] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();

        setSearchResult(recipes.results);
    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

    return (
        <div className='recipe__search'>
            {searchResult.map((element) => {
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

export default Searched