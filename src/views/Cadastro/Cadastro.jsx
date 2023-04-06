import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./index.css";




const cadastro = () => {
  
  return (
    <section className='cadastro'>
        {/* <Header /> */}
        <form className='cadastro__form'>
            <h1>Faça o seu cadastro</h1>
            <h2>e tenha acesso a uma infinidade de produtos!</h2>
            <div className='cadastro__input-wrapper'>
                <label>Digite seu CPF:</label>
                <input type='number' name='cpf' placeholder="Somente números" id="cpf" className='cadastro__input-cpf' />

                <label htmlFor="password">Senha:</label>
                <input type='password' id='password' name='password' placeholder='De 4 a 10 dígitos' className='cadastro__input-senha'/>
            </div>
            <button type='button' onClick={() => {
              let cpf = document.getElementById('cpf').value;
              let senha = document.getElementById('password').value;

              if(cpf.length == 11 && senha.length > 3 && senha.length < 11){
              window.localStorage.setItem("cpf", cpf)
              window.localStorage.setItem("senha", senha)
              alert("Cadastro realizado! Volte a página de login e aproveite nossos produtos!")
              
              } else {
                alert("CPF deve conter os 11 dígitos (apenas números)! Senha deve ter entre 4 e 10 dígitos!")
              }
           
            }
          } 
              className='button'>
                Registrar!
            </button>
            <h3>Já tem cadastro? Clique <Link to={"/"}>aqui</Link> para voltar a página de login.</h3>
        </form>

    </section>
  )
}

export default cadastro;