import './App.css';
import {Navbar} from './components/navbar/navbar'
import {useEffect, useState} from 'react'
import {ItemCount} from './components/itemCount/itemCount'

function App() {
  const[filter, setfilter]=useState('')
  const[navigation, setNavigation] = useState([
      'Inicio', 'Productos', 'Contacto', 'Novedades',
    ])
  const [mochila,setProducts] = useState([
    {
      titulo:'Mochila Phamn',
      precio:'$4800',
      descripcion:'Mochila de cuero con piedras',
    },
    {
      titulo:'Mochila Mila',
      precio:'$12500',
      descripcion:'Mochila de cuero con bolsillo al frente',
    },
    {
      titulo:'Mochila Tini',
      precio:'$1500',
      descripcion:'Mochila de cuero con apliques',
    },
    {
      titulo:'Mochila Dorothy',
      precio:'$4300',
      descripcion:'Mochila de cuero con volados',
    },
  ])

  const USER = {
    name: 'Angelina Martino',
    avatar: ''
  }
  const CART = 2
  const [filterMochilas, setFilterMochilas] = useState(mochila)

  useEffect(
    ()=> {
      //filtra mochilas//
      const newFilterMochilas=mochila.filter((mochila) => 
        mochila.titulo.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
        setFilterMochilas(newFilterMochilas)
    }, [filter])

  console.log('filter =>', filter)
  return (
    <main className='App'>
      <Navbar user={USER} cartQuantity={CART} navigation={navigation}/>
      <ItemCount/>
      <input 
        type='text' 
        placeholder='Buscar mochila' 
        value={filter}
        onChange={(e)=> setfilter(e.target.value)}
      />
      <div>
        {filterMochilas.map((mochila)=> (
            <div className= 'mochila' >
              <p>{`${mochila.titulo} ${mochila.precio}`}</p>
              <p>{mochila.descripcion}</p>
            </div>
        ))}
        
      </div>
    </main>
  )
}
export default App
