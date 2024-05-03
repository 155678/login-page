import { useState, type  FC } from "react"


const RegisterPage: FC = () => {
//hook state component rernder mikone 
  const [formData, setFormData] = useState({
     email: "",
     password:"",
  });


  const handleSubmitForm = (e:React.FormEvent): void => {
    console.log(formData);
    e.preventDefault();
 }; 
//onchange => soulatione ke on lahze amale mikone  bare ye sarie charachter amal mikone 
//onblur => yanie input az halate focuse kharage shode az ta ye had zyadie az on blur astafde mikhnonue jaye onchange  
  return ( 
    <form>
      <h1>Register Page!</h1>
      <input onBlur={(e)=>setFormData((prevState) =>{ return {...prevState,email: e.target.value};})} className="p-2 mx-2 bg-slate-300" type="text" />
      <input onChange={(e)=>setFormData((prevState) =>{ return {...prevState,password: e.target.value};})} className="p-2 mx-2 bg-slate-300" type="text" />
      <button onClick={handleSubmitForm}>submit</button>
    </form>
  );
}

export default RegisterPage
