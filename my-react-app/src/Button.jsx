function Button(){

    const handleClick = () => console.log("Ouch");
    const handleClick2 = (name) => console.log(`${name}Stop clicking me`);
    return(<button onClick={handleClick2("Shwe")}>Click Me</button>);
}

export default Button