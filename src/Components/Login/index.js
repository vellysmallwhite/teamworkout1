
import './style.css';
import { useState } from 'react';

const Login = ({ onLogin, onRegister }) => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const updateEmail = () => {
    setEmail(document.getElementById("emailID").value);
  }

  const updatePassword = () => {
    setPassword(document.getElementById("passwordID").value);
  }

    return (
      <div className="login">
        <span className="heading">Team Workouts<br/></span>
        <span className="label">email</span>
        <input id="emailID" type="text" className="input" onChange={updateEmail} />
        <span className="label">password</span>
        <input id="passwordID" type="text" className="input" onChange={updatePassword} />
        <button data-testid={"loginButton"} className="button" onClick={() => onLogin(email, password)}>Login</button>
        <button data-testid={"registerButton"} className="button" onClick={() => onRegister(email, password)}>Register</button>
      </div>
    );
  }
  
  export default Login;