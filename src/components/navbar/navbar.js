import logo from '../../images/logo.png'

export const Navbar = () => {
    return (
        <header className="topBar">
          <img src={logo} className='logo' alt='logo'></img>
          <p className='logo'>HALU HANDMADE</p>
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
          </nav>
        </header>
    )
}
