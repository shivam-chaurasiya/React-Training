import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const[firstname,setFirstname] = useState(' ');
  const[lastname,setLastname] = useState(' ');
  const[email,setEmail] = useState(' ');
  const[fathername,setFathernam] = useState(' ');
  const[phone,setPhone] = useState(' ');
  const[address,setAddress] = useState(' ');

  const handleChange =(e)=>{
    setFirstname(e.target.value);
  }

  const handlelastChange =(e)=>{
    setLastname(e.target.value);
  }
  const handlemailChange =(e)=>{
    setEmail(e.target.value);
  }
  const handlephoneChange =(e)=>{
    setPhone(e.target.value);
  }
  const handlefatherChange =(e)=>{
    setFathernam(e.target.value);
  }
  const handleaddressChange =(e)=>{
    setAddress(e.target.value);
  }

  const SUBMIT = (e) =>{
    //alert("firstname:" + firstname + "lastname:" + lastname + "father'name:" + fathername + "email:" + email +  " Mobile No." + phone + "Address" + address );
    e.preventDefault();
    console.log(firstname);
    navigate('/info', {state:{
        firstname : firstname,
        lastname : lastname,
        fathername : fathername,
        email : email,
        phone : phone,
        address: address
  }});
  }

  return (
    <div>
        <form>
      <label>Firstname:
        <input type="text" value={firstname} required onChange={(e) => {handleChange(e)}}/>
      </label><br/>
      <label>Lastname:
        <input type="text" value={lastname} required onChange={(e) => {handlelastChange(e)}}/>
      </label><br/>
      <label>Father's Name:
        <input type="text" value={fathername} required onChange={(e) => {handlefatherChange(e)}}/>
      </label><br/>
      <label>Email:
        <input type="text" value={email} required onChange={(e) => {handlemailChange(e)}}/>
      </label><br/>
      <label>Mobile No.:
        <input type="text" value={phone} required onChange={(e) => {handlephoneChange(e)}}/>
      </label><br/>
      <label>Address:
        <input type="text" value={address} required onChange={(e) => {handleaddressChange(e)}}/>
      </label><br/>
      <button onClick={SUBMIT}>signedup</button>
      </form>
    </div>
  )
}

export default Form
