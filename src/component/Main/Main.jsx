import React from 'react';
import CardDetails from '../CardDetails/CardDetails';
import CardMain from '../CardMain/CardMain';
import './Main.css'

const Main = () => {
    return (
        <div className='main row'>
            <div className="card-main col col-md-9">
                <CardMain></CardMain>

            </div>
            <div className="card-details card col col-md-3">
                
                <CardDetails></CardDetails>

            </div>
            
        </div>
    );
};

export default Main;