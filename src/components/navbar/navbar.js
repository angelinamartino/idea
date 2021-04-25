import logo from '../../images/logo.png'
import './navbar.css'
//import '../cartWidget/cartWidget'

export const Navbar = (props) => {
    const handleClick = () => {
      alert (`Estas logeado ${props.user.name}`)
    }

    return (
        <header className="navbar">
          <img className='logo' src={logo} className='logo' alt='logo'></img>
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
          </nav>

          <div className='right'>
              <input className='search' type='text' placeholder= 'Buscar' />
              <span className='cart'>
                  <img className='cart-icon' 
                       src='https://cdn.icon-icons.com/icons2/2098/PNG/512/shopping_cart_icon_128753.png' alt='Cart'/>
                  <label className='cart-quantity' >{props.cartQuantity}</label>
              </span>
              <img className='avatar' 
                    src={props.user.avatar} 
                    alt='user' 
                    onClick={handleClick}/>
          </div>
          
        </header>
    )
}
