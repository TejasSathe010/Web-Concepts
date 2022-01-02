import React from 'react'

const Input = ({ changeBackground }) => {
    return (
        <input
            type="text"
            placeholder="Enter background color"
            onChange={(e) => {
                changeBackground(e.target.value);
            }}
        />
    )
}

export default Input
