import React from 'react';
import { Link } from "react-router-dom";
import "./index.css";
//import Header from "../../components/Header/Header";

const login = () => {
  return (

    <section className='login'>
        {/* <Header /> */}
        <form className='login__form'>
            <h1>Acesse com seu login ou cadastre-se!</h1>
            <h2>você pode entrar com seu CPF.</h2>
            <div className='login__input-wrapper'>
                <label>Digite seu CPF:</label>
                <input type='number' placeholder="Somente números" id="cpf1" className='login__input-cpf'>

                </input>
                <label htmlFor="password">Senha:</label>
                <input type='password' id='password1' placeholder='********'/>
            </div>
            
            <button type="button" onClick={() =>{
              const cpf1 = document.getElementById('cpf1');
              const senha1 = document.getElementById('password1');

                if(cpf1.value === window.localStorage.getItem('cpf') && senha1.value === window.localStorage.getItem('senha')){
                  window.location.href = "home";
                } else {
                  alert("Dados não cadastrados! Favor corrigir dados ou realizar novo cadastro.");
                }

              } 
            }>
                Entrar
            </button>
          
            <h3>Não tem cadastro? <Link to={"/cadastro"}>Cadastre-se aqui!</Link></h3>
        </form>

    </section>

  )
}

export default login;