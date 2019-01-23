import React from 'react';


const Slide = ({ image, text }) => {
    
    return(
        
            <li>
                <img src= {image}  alt="pranav"/>
                <div className="caption center-align">
                    <h2 className="white-text">{text}</h2>
                </div>
            </li>
    )
}

export default Slide