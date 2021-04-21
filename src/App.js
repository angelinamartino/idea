import './App.css';
import {Navbar} from './components/navbar/navbar'
import {List} from './components/list/list'

function App() {
  const Products = [
    {
      titulo:'Sobre Phamn',
      precio:'$4800',
      descripcion:'Sobre de cuero con piedras',
    },
    {
      titulo:'Mochila Mila',
      precio:'$12500',
      descripcion:'Mochila de cuero con bolsillo al frente',
    },
    {
      titulo:'Sobre Dorothy',
      precio:'$4300',
      descripcion:'Sobre de cuero con volados',
    },
    {
      titulo:'Pulsera',
      precio:'$1500',
      descripcion:'Pulsera de cuero con apliques',
    },
  ]




  return (
    <div className='App'>
      <Navbar />
      <List products={Products} />
    </div>
    
  )
}
export default App
