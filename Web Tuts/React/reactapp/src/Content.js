import React from 'react'

const Content = () => {
    const handleName = () => {
        const names = ['Tejas', 'Sunny', 'Lionel'];
        const int = Math.floor(Math.random() * names.length);
        return names[int];
    }

    const handleClick = () => {
        console.log('Button Clicked!!');
    }
    const handleClick2 = (name) => {
        console.log(`${name} was clicked!!`);
    }
    const handleClick3 = (e) => {
        console.log(`${e.target.innerHTML} was clicked!!`);
    }

    return (
        <main>
            <h3>Hello {handleName()}!!</h3>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClick2('Tejas')}>Click me</button>
            <button onClick={(e) => handleClick3(e)}>Click me</button>
        </main>
    )
}

export default Content
