import { Link } from "react-router-dom";
import "./index.scss";
import React from "react";
import Header from "../../components/Header/header";

function Login() {

  return (
    <div className="Login">
      <Header />
      <label>Digite seu CPF</label>
      <input placeholder='DIGITE SEU cpf'></input>
      <button> <Link to={'./home'}>Login</Link></button>
    </div>
  )
}

export default Login
