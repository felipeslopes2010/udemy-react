import './App.css'
import ImagemBBB from './assets/bbb24.jpg'
import { ListRender } from './components/ListRender'
import { ManageDate } from './components/ManageData'
import { ConditionalRender } from './components/ConditionalRender'
import { ShowUserName } from './components/ShowUserName'
import { useState } from 'react'
import { CarDetails } from './components/CarDetails'
import { Fragment } from './components/Fragment'
import { Container } from './components/Container'
import { ExecuteFunction } from './components/ExecuteFunction'
import { Message } from './components/Message'
import { ChangeMessageState } from './components/ChangeMessageState'
import { UserDetails } from './components/UserDetails'

const App = () => {
  const [username] = useState("Maria")
  const [users, setUsers] = useState([
    {id: 1, name: 'Felipe', age: 30, job: 'Programador'},
    {id: 2, name: 'Joaquim', age: 16, job: 'Estudante'},
    {id: 3, name: 'Rodrigo', age: 33, job: 'Artista'},
  ])
  const [message, setMessage] = useState("")

  const handleChangeMessage = msg => setMessage(msg)

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0 },
    { id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 34343 },
    { id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 234 },
  ]

  const handleDeleteUser = () => {
      const randomIndex = Math.floor(Math.random() * users.length);
      const randomUserId = users[randomIndex].id;

    setUsers((prev) => prev.filter(user => user.id !== randomUserId))
  }

  return (
    <div>
      <h1>Seção 3 - Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/aranha.png" alt="Imagem Homem Aranha" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={ImagemBBB} alt="Imagem do BBB" />
      </div>
      <ManageDate />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName name={username} />
      {/* Destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* Reaproveitamento de Componentes */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      {/* Fragment */}
      <Fragment propFragment="Teste" />
      {/* Prop Children */}
      <Container title="Título Container" value="Teste">
        <p>Conteúdo do Container passado por child props</p>
      </Container>
      <Container title="Título Segundo Container" value="Teste 2">
        <h5>Testando Container</h5>
      </Container>
      {/* Executar função */}
      <ExecuteFunction users={users} deleteRandomUser={handleDeleteUser} />
      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState changeMessage={handleChangeMessage} />
      {/* Desafio */}
      {
        users.map(user => (
          <UserDetails
            key={user.id}
            name={user.name}
            age={user.age}
            job={user.job}
          />
        ))
      }
    </div>
  )
}

export { App }
