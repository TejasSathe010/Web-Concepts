import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('Tejas');
    const [age, setAge] = useState(23);
    const handleClick = () => {
        setName('Sathe');
        setAge(24);
    };

    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick }>Click me</button>
        </div>
     );
}
 
export default Home;