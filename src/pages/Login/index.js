import React from "react";
import { FiMail, FiLock } from "react-icons/fi";

//import {} from 'react-icons/fi'

import "./styles.css";
import login_img from "../../assets/images/login_image.png";

export default function Logon() {
  return (
    <div className="logon-container">

      <div className="content">
        <div className="form">
          <h1>Bem vindo ao Prae</h1>
          <form action="">
            <div className="input-container">
              <i><FiMail size={18} color="#612f74" /></i>
              <input placeholder="Seu email" />
            </div>

            <div className="input-container">
            <FiLock size={20} color="#612f74" />
            <input placeholder="Senha" />
            </div>
            
           
            <button type="submit">Entrar</button>
            <p> Não tem uma conta? </p>
            <a href="/requireaccount">Solicite uma conta</a>
          </form>
        </div>

        <div className="adv">
          <img src={login_img} alt="Login" />
          <p className="ptitle">Auditorias e processos de qualidade</p>
          <p>
            <span>Prae</span> é para todos os gestores de T.I <br /> que desejam
            controlar preventivas
            <br /> de forma inovadora.
          </p>
        </div>
      </div>

      
<footer><a href="123">Copyright © 2020 - Prae Team </a></footer>
    </div>
  );
}
