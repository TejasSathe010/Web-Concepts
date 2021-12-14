const Home = () => {

    const handleClick = (name, event) => {
        console.log('Clicked!!! ' + name);
    };

    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <button onClick={() => handleClick('Tejas') }>Click me</button>
        </div>
     );
}
 
export default Home;