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
            <input type="email" className="emailLogin" />
          </div>
          <div className="cajaPassLogin">
            <label className="loginPassword">Password</label>
            <input type="password" className="passLogin" />
          </div>
        </div>
        <button></button>
      </form>
    </div>
  );
};

export default Login;
