import './App.css'
import { CarComponent } from './components/CarComponent'

function App() {
  const cars = [
    {brand: "Ferrari", km:0, price:1000000},
    {brand: "Ferrari", km:0, price:1000000},
    {brand: "Ferrari", km:0, price:1000000},
  ]

  return (
    <div>
      <h1>Lista de carros</h1>
      <div className='car-container'>
        {
          cars.map((car) => (
            <CarComponent brand={car.brand} km={car.km} price={car.price} />
          ))
        }
      </div>
    </div>
  )
}

export { App }
