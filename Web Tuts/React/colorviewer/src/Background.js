import React from 'react';

const Background = ({ background }) => {
    console.log(background);
    return (
        <div
            className="background"
            style={{
                backgroundColor:  background 
            }}
        >
            <p>{ background }</p>
        </div>
    )
}

export default Background;
