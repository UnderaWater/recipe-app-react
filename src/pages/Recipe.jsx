import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
    const [details, setDetails] = useState({});
    const [active, setActive] = useState('instructions')
    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData)
    };

    useEffect(() => {
        fetchDetails()
    }, [params.name])

    return (
        <div className='recipe__details'>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <div className='recipe__details-info'>
                <button className={`recipe__details-btn ${active === 'instructions' ? 'active' : ''}`} onClick={() => setActive('instructions')}>
                    Instructions
                </button>
                <button className={`recipe__details-btn ${active === 'ingredients' ? 'active' : ''}`} onClick={() => setActive('ingredients')}>
                    Ingredients
                </button>
            </div>
        </div>
    )
}

export default Recipe;