import './App.css'
import { Challenge } from './components/Challenge'
import { Events } from './components/Events'
import { FirstComponent } from './components/FirstComponent'
import { MyComponent } from './components/MyComponent'
import { TemplateExpressions } from './components/TemplateExpressions'

const App = () => (
  <div className='App'>
    <h1>Fundamentos React</h1>
    <FirstComponent />
    <TemplateExpressions />
    <MyComponent />
    <Events />
    <Challenge />
  </div>
)

export { App }
