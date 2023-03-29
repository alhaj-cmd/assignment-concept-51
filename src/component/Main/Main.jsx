import React, { useState } from 'react';
import CardDetails from '../CardDetails/CardDetails';
import CardMain from '../CardMain/CardMain';
import './Main.css'


const handleAddToCart = (time)=>{
    // const [watches, setWatchTime] = useState('');
    console.log(watches);
    // console.log('hello',time)
    const previousTime =JSON.parse(localStorage.getItem('watchTime'));
    if(previousTime){
        const sum = previousTime + time;
        localStorage.setItem('watchTime', sum);
        // setWatchTime(sum)
    }
    else{
        localStorage.setItem('watchTime', time);
        // setWatchTime(time)
    }
}




const Main = () => {
    return (
        <div className='main container row row-cols-1'>
            <div className="card-main col-md-9">
                <CardMain handleAddToCart={handleAddToCart}></CardMain>

            </div>
            <div className="card-details card col-md-3 ">
                
                <CardDetails></CardDetails>

            </div>
            
        </div>
    );
};

export default Main;