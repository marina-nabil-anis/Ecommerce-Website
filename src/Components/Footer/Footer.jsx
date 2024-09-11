import './Footer.css'
import { Link, Outlet } from 'react-router-dom'


function Footer(){
    return(
        <div id='allFooter'>
        <div id='footer'>
<div id='FirstColumn'>
<h1 id='hLogo'>Funiro.</h1>
<div>
<p className='ColumnOneInfo'>400 University Drive Suite 200 Coral Gables,
</p>
<label className='ColumnOneInfo'>FL 33134 USA</label>
</div>
</div>

<div id='SecColumn'>
    <label className='footerLabels'>Links</label>
    <Link className='footerlinks'to="/home">Home</Link>
<Link className='footerlinks' to="/shop">Shop</Link>
<Link className='footerlinks' to="/abou">About</Link>
<Link  className='footerlinks'to="/contact">Contact</Link>
</div>

<div id='ThirdColumn'>
<label className='footerLabels'>Help</label>
<label className='footerlinks'>Payment Options</label>
<label className='footerlinks'>Returns</label>
<label className='footerlinks'>Privacy Policies</label>
</div>

<div id='FourthColumn'>
<label className='footerLabels'>Newsletter</label>  
<div id='MySub'>
    <input id='inputSub' placeholder='Enter Your Email Address'></input>
    <button id='SubBtn'>SUBSCRIBE</button>
</div>
</div>

        </div>
        <hr></hr>
        <label id='FinalLabel'>2023 furino. All rights reserved</label>
        </div>
    )
}

export default Footer