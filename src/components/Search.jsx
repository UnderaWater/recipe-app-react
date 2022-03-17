import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'

function Search() {
    const [input, setInput] = useState('');

    const changeHandler = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <form className='recipe__form'>
            <div>
                <FaSearch />
                <input className='recipe__form-input' type='text' value={input} onChange={(e) => changeHandler(e)} />
            </div>
        </form>
    )
}

export default Search;