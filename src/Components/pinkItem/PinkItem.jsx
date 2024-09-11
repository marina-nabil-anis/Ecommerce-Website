import './PinkItem.css'

function PinkItem(props){
return(
    <div className='PinkItems'>
        <img className='PinkLogo' src={props.PinkLogo}/>
        <div className='PinkInfo'>
            <label className='FirstInfo'>{props.FirstInfo}</label>
            <label className='SecInfo'>{props.SecInfo}</label>
        </div>
    </div>
)
}

export default PinkItem