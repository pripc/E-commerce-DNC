import React from 'react';
import { Link } from "react-router-dom";
import "./index.scss";
import Header from "../../components/Header/Header";

const login = () => {
  return (

    <section className='login'>
        <Header />
        <form className='login__form'>
            <h1>Acesse com seu login ou cadastre-se!</h1>
            <h2>você pode entrar com seu CPF.</h2>
            <div className='login__input-wrapper'>
                <label>Digite seu CPF:</label>
                <input type='text' placeholder="Somente números" id="cpf1" className='login__input-cpf' maxLength="14" onKeyDown={() => {
                      var cpfMask = document.getElementById('cpf1');

                      if (cpfMask.value.length === 3 || cpfMask.value.length === 7){
                        cpfMask.value +=  ".";
                      } else if (cpfMask.value.length === 11){
                        cpfMask.value += "-";
                      } else{

                      }
                    }}>
                  

                </input>
                <div id="erroCPF1"></div>

                <label htmlFor="password">Senha:</label>
                <input type='password' id='password1' placeholder='********'/>
                <div id="erroSENHA1"></div>
            </div>
            
            <button type="button" onClick={() =>{
              const cpf1 = document.getElementById('cpf1');
              const senha1 = document.getElementById('password1');
              const erroSENHA1 = document.getElementById('erroSENHA1');
              const erroCPF1 = document.getElementById('erroCPF1');
              const erroCS = document.getElementById('erroCS');

                if(cpf1.value === window.localStorage.getItem('cpf') && senha1.value === window.localStorage.getItem('senha')){
                  
                  cpf1.style.borderColor = "#0f7b0f";
                  senha1.style.borderColor = "#0f7b0f";
                  erroCPF1.innerHTML = "";   
                  erroSENHA1.innerHTML = "";
                  erroCS.innerHTML = "";
                  setTimeout(()=> {window.location.href = "/home";}, 1500);
                  
              } else {
                if(cpf1.value === window.localStorage.getItem('cpf')){
                  cpf1.style.borderColor = "#0f7b0f";   
                  erroCPF1.innerHTML = "";             
                  
                }else if (senha1.value === window.localStorage.getItem('senha')){
                  senha1.style.borderColor = "#0f7b0f";
                  erroSENHA1.innerHTML = "";
                }
                else{
                erroCS.innerHTML = "Dados não encontrados! Favor corrigir dados ou realizar novo cadastro.";
                erroCS.style.color =  "#e73550";
                cpf1.style.borderColor = "#e73550";
                senha1.style.borderColor = "#e73550";
                erroSENHA1.innerHTML = "*Dado incorreto."
                erroCPF1.innerHTML = "*Dado incorreto."
                erroCPF1.style.color =  "#e73550";
                erroSENHA1.style.color =  "#e73550";
              }
              }
              }
              }
            >
                Entrar
            </button>
            <div id="erroCS"></div>
          
            <h3>Não tem cadastro? <Link to={"/cadastro"}>Cadastre-se aqui!</Link></h3>
        </form>

    </section>

  )

}

export default login;