const CarDetails = ({ brand, km, color, newCar }) => (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>
                Marca: {brand}
            </li>
            <li>
                KM: {km}
            </li>
            <li>
                Cor: {color}
            </li>
        {newCar && <p>Este carro é novo!</p>}
        </ul>
    </div>
)

export { CarDetails }