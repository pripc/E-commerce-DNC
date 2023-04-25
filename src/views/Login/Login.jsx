import React from 'react';
import { Link } from "react-router-dom";
import "./index.scss";
import Header from "../../components/Header/Header";

const login = () => {
  return (
    <div>
      <Header />
    <section className='login'>
        
        <form className='login__form'>
            <h1 className='h1_login'>Acesse com seu login ou cadastre-se!</h1>
            <h2 className='h2_login'> você pode entrar com seu CPF.</h2>
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
                
                <label htmlFor="password">Senha:</label>
                <input type='password' id='password1' placeholder='********'/>
                
            </div>
            
            <button id="botao232" type="button" onClick={() =>{
              const cpf1 = document.getElementById('cpf1');
              const senha1 = document.getElementById('password1');
              const erroCS = document.getElementById('erroCS');

                if(cpf1.value === window.localStorage.getItem('cpf') && senha1.value === window.localStorage.getItem('senha')){
                  
                  cpf1.style.borderColor = "#0f7b0f";
                  senha1.style.borderColor = "#0f7b0f";
                  erroCS.innerHTML = "";
                  setTimeout(()=> {window.location.href = "/home";}, 1500);
                  
              } else {
                erroCS.innerHTML = "Dados não encontrados! Favor corrigir dados ou realizar novo cadastro.";
                erroCS.style.color =  "#e73550";
                cpf1.style.borderColor = "#e73550";
                senha1.style.borderColor = "#e73550";
               
              }
              }
              }
              
            >
                Entrar
            </button>
            <div id="erroCS"></div>
          
            <h3 className='h3_login'>Não tem cadastro? <Link to={"/cadastro"}>Cadastre-se aqui!</Link></h3>
        </form>

    </section>
    </div>

  )

}

export default login;