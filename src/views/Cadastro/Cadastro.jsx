import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./index.scss";
import Header from "../../components/Header/Header";



const cadastro = () => {
  
  return (
    <div>
      <Header />
  
    <section className='cadastro'>
        
        <form className='cadastro__form'>
            <h1>Faça o seu cadastro</h1>
            <h2>e tenha acesso a uma infinidade de produtos!</h2>
            <div className='cadastro__input-wrapper'>
                <label>Digite seu CPF:</label>
                <input type='text' name='cpf' placeholder="Somente números" id="cpf" className='cadastro__input-cpf' maxLength="14" onKeyDown={() => {
                      var cpfMask1 = document.getElementById('cpf');

                      if (cpfMask1.value.length === 3 || cpfMask1.value.length === 7){
                        cpfMask1.value +=  ".";
                      } else if (cpfMask1.value.length === 11){
                        cpfMask1.value += "-";
                      } else{

                      }
                    }
                   } />
                <div id="erroCPF"></div>

                <label>Senha:</label>
                <input type='password' id='password' name='password' placeholder='De 4 a 10 dígitos' className='cadastro__input-senha'/>
                <div id="erroSENHA"></div>
            </div>
            <button id="botao23" type='button' onClick={() => {
              let cpf = document.getElementById('cpf').value;
              let senha = document.getElementById('password').value;
              let res = document.getElementById('error');
              let erroCPF = document.getElementById('erroCPF');
              let erroSENHA = document.getElementById('erroSENHA');

              if(cpf.length == 14 && senha.length > 3 && senha.length < 11){
              window.localStorage.setItem("cpf", cpf)
              window.localStorage.setItem("senha", senha)
              document.getElementById('cpf').style.borderColor = "#0f7b0f";
              erroCPF.innerHTML = '';
              erroSENHA.innerHTML = '';
              document.getElementById('password').style.borderColor = "#0f7b0f";
              alert("Cadastro realizado! Volte a página de login e aproveite nossos produtos!")
              setTimeout(()=> {window.location.href = "/";}, 1500);
              
              } else {
                if(cpf.length != 14) {
                  document.getElementById('cpf').style.borderColor = "#e73550";
                  erroCPF.innerHTML = 'CPF deve conter 11 dígitos, apenas números.'
                  erroCPF.style.color = "#e73550";
                } else {
                  document.getElementById('cpf').style.borderColor = "#0f7b0f";
                  erroCPF.innerHTML = ''
                  erroCPF.style.color = "";
                }
                
                if(senha.length < 3 || senha.length > 11) {
                  document.getElementById('password').style.borderColor = "#e73550";
                  erroSENHA.innerHTML = 'Senha deve conter de 4 a 10 dígitos.'
                  erroSENHA.style.color = "#e73550";
                } else {
                  document.getElementById('password').style.borderColor = "#0f7b0f";
                  erroSENHA.innerHTML = ''
                  erroSENHAs.style.color = "";
                }
              }
           
            }
          } 
              className='button'>
                Registrar!
            </button>
            <div id="error"></div>
            <h3>Já tem cadastro? Clique <Link to={"/"}>aqui</Link> para voltar a página de login.</h3>
        </form>

    </section>
    </div>
  )
}

export default cadastro;