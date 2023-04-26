// import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <button className="volverHome">Go Back</button>
      <form className="cajaLogin">
        <h1>Login</h1>
        <div className="inputsLogin">
          <div className="cajaEmailLogin">
            <label className="loginEmail">Email Address</label>
            <input type="email" className="emailLogin" placeholder="alexei@mail.com"/>
          </div>
          <div className="cajaPassLogin">
            <label className="loginPassword">Password</label>
            <input type="password" className="passLogin" placeholder="12345"/>
          </div>
        </div>
        <button className="botonLogin">Continue</button>
      </form>
    </div>
  );
};

export default Login;
