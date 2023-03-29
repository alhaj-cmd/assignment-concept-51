import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import './CardMain.css'

const CardMain = ({handleAddToCart}) => {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])

    


    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4 ">
               {
                movies.map(movie => <Home
                key={movie.category}
                movie={movie}
                handleAddToCart={handleAddToCart}
                
                ></Home>)

               }
            </div>
        </div>
    );
};

export default CardMain;