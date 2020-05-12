import React from "react";
import { Chart } from 'react-charts'
import {
  FiFolder,
  FiBarChart2,
  FiPlusCircle,
  FiLock,
  FiChevronDown,
  FiBell,
  FiLogOut,
  FiPlus,
  FiEdit2,
  FiHardDrive,
  FiCheckCircle,
  FiTrendingUp,
 FiCalendar,
 FiAlertCircle,

} from "react-icons/fi";
import Rogerinho from "../../assets/images/profile.jpg";

//import {} from 'react-icons/fi'

import "./styles.css";



export default function Dashboard() {
  return (


    
    <div className="content-dashboard">




      
      <div className="menu">
        <div className="logo">
          <a href="main">Prae</a>
        </div>

        <div className="menu-items">
          <a href="teste">
            <FiFolder size={50} color="#422047" />
          </a>
        </div>

        <div className="menu-items">
          <a href="test">
            <FiBarChart2 size={50} color="#422047" />
          </a>
        </div>

        <div className="menu-items">
          <a href="test">
            <FiPlusCircle size={50} color="#422047" />
          </a>
        </div>

        <div className="menu-items">
          <a href="teste">
            <FiLock size={50} color="#422047" />
          </a>
        </div>
        <div className="menu-items">
          <a href="teste">
            <FiFolder size={50} color="#422047" />
          </a>
        </div>
      </div>

      <div className="main-dash">
        
          <div className="login-pic-container">
            <button type="submit">
              <FiEdit2 size={25} color="#612F74" />
              <div className="text-container">
                <span>Gerenciar <br />
                Equipamentos
                </span>
              </div>
            </button>
            <button type="submit">
              <FiPlus size={30} color="#FFFFFF" />
              <span>Adicionar preventiva</span>
            </button>
            <div className="profile-content">
            <p>
              Rogerinho do Ingá <br /> &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>Motorista</span>
            </p>
            <img className="profile-pic" src={Rogerinho} alt="Profile Pic" />
            <FiChevronDown size={20} color="#422047" />
            </div>
          <FiBell size={20} color="#422047" />
          <FiLogOut size={20} color="#422047" />
          </div>
       
        <div className="title-header"></div>
        <div className="test">
          <p>Dashboard</p>
        </div>








        <div className="cards-container-dash">
          <div className="cards-dash">
            <FiHardDrive size={60} color="#612F74" />
            <div className="text-container">
              65 <p>Equipamentos Cadastrados</p>
            </div>
          </div>
          <div className="cards-dash">
          <FiCalendar className="cards-expired" size={60} color="#FFF" />
            <div className="text-container">
              65 <p>Preventivas vencidas</p>
            </div>
          </div>
          <div className="cards-dash">
          <FiAlertCircle className="cards-warning" size={60} color="#E68D0B" />
            <div className="text-container">
              65 <p>Preventivas perto do vencimento</p>
            </div>
          </div>
          <div className="cards-dash">
          <FiTrendingUp size={60} color="#98C632" />
            <div className="text-container">
              12 <p>Preventivas efetuadas em <b>6 meses</b></p>
            </div>
          </div>
          <div className="cards-dash">
          <FiAlertCircle className="cards-warning" size={60} color="#E68D0B" />
            <div className="text-container">
              65 <p>Preventivas perto do vencimento</p>
            </div>
          </div>
          <div className="cards-dash">
          <FiAlertCircle className="cards-warning" size={60} color="#E68D0B" />
            <div className="text-container">
              65 <p>Preventivas perto do vencimento</p>
            </div>
          </div>
          <div className="big-card-dash">
          <FiCalendar className="cards-expired" size={60} color="#FFF" />
            Testeaaaaaa
          </div>
          <div className="big-card2-dash">
          <FiCalendar className="cards-expired" size={60} color="#FFF" />
           Teste
          </div>
          <div className="big-card3-dash">
          <FiCalendar className="cards-expired" size={60} color="#FFF" />
           Teste
          </div>
        </div>
      </div>
    </div>
  );
}
