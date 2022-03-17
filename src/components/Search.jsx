import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Search() {
    const [input, setInput] = useState('');
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`)
    };

    return (
        <form className='recipe__form' onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input className='recipe__form-input' type='text' value={input} onChange={(e) => changeHandler(e)} />
            </div>
        </form>
    )
}

export default Search;