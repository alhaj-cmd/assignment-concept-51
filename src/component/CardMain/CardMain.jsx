import React from 'react';
import './CardMain.css'

const CardMain = () => {
    return (
        <div>
            <div className="movie-container">
                <div className="movie-card card">
                    <div className="movie-poster">
                        <img src="" alt="" />
                    </div>
                    <h2>Abdullah</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="watchTime">
                        <p>Watch</p>
                        <p>Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardMain;