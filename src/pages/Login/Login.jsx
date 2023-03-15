import { Link } from "react-router-dom";

function Login() {

  return (
    <div className="Login">
      <label>Digite seu CPF</label>
      <input placeholder='DIGITE SEU cpf'></input>
      <button> <Link to={'./home'}>Login</Link></button>
    </div>
  )
}

export default Login
