import { Link, Outlet } from 'react-router-dom'
import Logo from '../../../public/assets/SkinClinic.png'
import MyCart from '../../../public/assets/Vector.png'
import './Layout.css'
import Footer from '../../Components/Footer/Footer'
function Layout(){
    return(
        <>
        <nav>
         
<img src={Logo}/>

    <Link className='links'to="/home">Home</Link>
<Link className='links' to="/shop">Shop</Link>

<Link  className='links'to="/contact">Contact</Link>

<Link to="/cart"><img src={MyCart}></img></Link>

        </nav>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}

export default Layout