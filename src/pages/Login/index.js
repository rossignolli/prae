import React from 'react';
//import {} from 'react-icons/fi'

import './styles.css'
import login_img from '../../assets/images/login_image.png'

export default  function Logon (){
      return (
            <div className="logon-container">

                  <div className="content">
                  <section className="form">
                        <form action="">
                              <h1>Bem vindo ao Prae</h1>
                              <input placeholder="Seu email"/>
                              <input placeholder="Senha"/>
                              <button type="submit">Entrar</button>
                              <a href="/requireaccount">
                                    Solicite uma conta
                              </a>
                        </form>
                        
                  </section>
                  <div className="adv">
                  <img src={login_img} alt="Login"/>
                  <h3>Auditorias e processos de qualidade</h3>
                  <p>Prae é para todos os gestores de T.I que desejam controlar preventivas de forma inovadora.</p>
                  </div>
                  </div>
            </div>
      );
}