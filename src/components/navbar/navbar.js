import logo from '../../images/logo.png'
import './navbar.css'
import '../cartWidget/cartWidget'

export const Navbar = () => {
    return (
        <header className="navbar">
          <img src={logo} className='logo' alt='logo'></img>
          <p className='marca'>HALU HANDMADE</p>
          <nav className='navigation'>
            <ul className='links'>
              <li className='link'> 
                <a href=''>Inicio</a>
              </li>
              <li className='link'>
                <a href=''>Productos</a>
              </li>
              <li className='link'>
                <a href=''>Contacto</a>
              </li>
              <li className='link'>
                <a href=''>Novedades</a>
              </li>
            </ul>
            <cartWidget/>
          </nav>
        </header>
    )
}
