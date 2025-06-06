const Challenge = () => {
    const numA = 5;
    const numB = 10;

    return (
        <div>
            <p>Const A: {numA}</p>
            <p>Const B: {numB}</p>
            <button onClick={() => console.log(numA + numB)}>Somar valores</button>
        </div>
    )
}

export { Challenge }