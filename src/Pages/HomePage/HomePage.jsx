import './HomePage.css'
import Electronics from '../../../public/assets/electonics.jpg'
import Jewelery from '../../../public/assets/jwellery.jpg'
import Men from '../../../public/assets/Men.webp'
import Women from '../../../public/assets/womene.jpg'
import Pink from '../../Components/PinkComponent/Pink'
function Home(){
    return(
       <div id='homediv'>
        <div id='homeBackground'>

        </div>
    
        <h3 id='Categories'>Categories</h3>
        <div id='AllCategories'>
            <div className='oneCategory'>
              <img className='CatImg' src={Electronics}/>
              <h4>Electronics</h4>
            </div>

            <div className='oneCategory'>
              <img className='CatImg' src={Jewelery}/>
              <h4>Jewelery</h4>
            </div>

            <div className='oneCategory'>
              <img className='CatImg' src={Men}/>
              <h4>Men's clothing</h4>
            </div>

            <div className='oneCategory'>
              <img className='CatImg' src={Women}/>
              <h4>Women's clothing</h4>
            </div>
        </div>
        <Pink></Pink>
       </div>
    )
}

export default Home

