import './App.css'
import { MyForm } from './components/MyForm'

const App = () => (
    <div>
      <h2>Forms</h2>
      <MyForm user={{name: 'Felipe', email: 'felipe@teste.com.br', bio: 'Hi, im programmer', role: 'admin'}} />
      <MyForm />
    </div>
  )

export { App }
