import './Pink.css'
import TrophyLogo from '../../../public/assets/trophy 1.png'
import guaranteeLogo from '../../../public/assets/guarantee.png'
import shippingLogo from '../../../public/assets/shipping.png'
import customerSupportLogo from '../../../public/assets/customer-support.png'
import PinkItem from '../pinkItem/PinkItem'

function Pink(){
const ArrayofPinks=[

    {PinkLogo: TrophyLogo,
     FirstInfo: "High Quality",
     SecInfo: "crafted from top materials",
     uniqueId: 1,
    },
    {PinkLogo: guaranteeLogo,
     FirstInfo: "Warranty Protection",
     SecInfo: "Over 2 years",
     uniqueId: 2,
    },
    {PinkLogo: shippingLogo,
     FirstInfo: "Free Shipping",
     SecInfo: "Order over 150 $",
     uniqueId: 3,
       },
       {PinkLogo: customerSupportLogo,
        FirstInfo: "24 / 7 Support",
        SecInfo: "Dedicated support",
        uniqueId: 4,
          },

]
    return(
        <div id='PinkDiv'>
          {ArrayofPinks.map((item)=>{
            return(
                <PinkItem
                key={item.uniqueId}
                PinkLogo={item.PinkLogo}
                FirstInfo={item.FirstInfo}
                SecInfo={item.SecInfo}
                ></PinkItem>
            )
          })} 

        </div>
    )
}

export default Pink