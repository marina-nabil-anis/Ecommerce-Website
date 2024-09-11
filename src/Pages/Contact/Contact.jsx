import './Contact.css'
import Info from '../../Components/Info/Info'
import Form from '../../Components/Form/Form'
import Pink from '../../Components/PinkComponent/Pink'
function Contact(){
    return(
        <div id='ContactDiv'>
            <div id='shopBackground'>
    <label id='backshopbig'>Contact</label>
    <div>
    <label id='homeshop'>Home &gt; </label>
    <label id='smallshop'>Contact </label>
    </div>
    </div>

    <div id='DescripeContact'>
        <label id='ContactTitle'>Get In Touch With Us</label>
        <p id='ContactP'>For More Information About Our Product & Services.
             Please Feel Free To Drop Us An Email. Our Staff Always Be There
              To Help You Out. Do Not Hesitate!</p>
    </div>

    <div id='InfoAndForm'>
        <Info></Info>
        <Form></Form>
    </div>
    <Pink></Pink>
        </div>
    )
}

export default Contact
