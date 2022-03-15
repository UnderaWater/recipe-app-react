import React from 'react'
import Category from '../components/Category';
import Popular from '../components/Popular';
import Veggie from '../components/Veggie';


function Home() {
    return (
        <div>
            <Category />
            <Veggie />
            <Popular />
        </div>
    )
}

export default Home;