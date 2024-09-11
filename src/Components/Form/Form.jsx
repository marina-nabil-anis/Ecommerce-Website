import { useState } from 'react';
import './Form.css'
import * as yup from "yup";

function Form (){

const [formData, setFormData] = useState({
    Name:"",
    Email: "",
    Subject: "",
    Message: "",
});

const userSchema = yup.object().shape({
    Name:yup.string(),
    Email:yup.string().email(),
    Subject:yup.string(),
    Message:yup.string(),
})

// async function testValidation(){
// const isValidForm = await userSchema.isValid(formData);
// console.log(isValidForm);
// }

async function testValidation() {
    try {
      await userSchema.validate(formData, { abortEarly: false });
      console.log("Validation passed");
    } catch (err) {
      err.inner.forEach((error) => {
        alert(`${error.path}: ${error.message}`);
      });
    }
  }

function onHandleSubmit(event){
event.preventDefault();
testValidation();
console.log(formData);
}

function onHandleChange(event){
var keyValue = event.target.value;
const keyName = event.target.name;

setFormData({
    ...formData,
    [keyName]: keyValue,
});
}
    
    return(
        <>
        <form onSubmit={onHandleSubmit} id='MyForm'>

        <div className='InputDivs'>
            <label className='FormLabels' htmlFor='Name'>Your name</label>
            <input id='Name' className='FormInputs' value={formData.Name}
            onChange={onHandleChange}
            name='Name'
            placeholder='Abc'
            required></input>
        </div>

        <div className='InputDivs'>
            <label className='FormLabels' htmlFor='Email'>Email address</label>
            <input id='Email' className='FormInputs' value={formData.Email}
            onChange={onHandleChange}
            name='Email'
              placeholder='Abc@def.com'
            required></input>
        </div>

        <div className='InputDivs'>
            <label className='FormLabels' htmlFor='Subject'>Subject</label>
            <input id='Subject' className='FormInputs' value={formData.Subject}
            onChange={onHandleChange}
            placeholder='This is an optional'
            name='Subject'></input>
        </div>

        <div className='InputDivs'>
            <label className='FormLabels' htmlFor='Message'>Message</label>
            <input id='Message' value={formData.Message} 
            onChange={onHandleChange}
            placeholder='Hi! i’d like to ask about'
            name='Message'></input>
        </div>

        <button id='SubmitBtn'>Submit</button>

        </form>
        </>
    )
}

export default Form