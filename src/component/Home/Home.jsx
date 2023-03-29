import React from 'react';
import './Home.css'



const Home = ({movie,handleAddToCart}) => {
    // console.log(handleAddToCart)
    const {movieName, watchTime,imdbRating,description,poster}=movie;
    // console.log(movie)

    

    return (
        <div>
             <div className="movie-card card p-2 h-100">
                    <div className="movie-poster">
                        <img className='img-fluid' src={poster} alt="" />
                    </div>
                    <h2>Name: {movieName}</h2>
                    <p>{description}</p>
                    <div className="watchTime mb-2 justify-content-around d-flex">
                        <p>WatchTime :{watchTime}</p>
                        <p>Rating :{imdbRating}</p>
                    </div>
                    <button onClick={()=>handleAddToCart(watchTime)} className='btn btn-info'>Button</button>
                </div> 
        </div>
    );
};

export default Home;