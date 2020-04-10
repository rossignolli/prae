import React from "react";
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
        <div className="header">
          <div className="login-pic-container">
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
        <div className="title-header">
          <button type="submit"><FiEdit2 size={25} color="#612F74" /><div className="text-container">Gerenciar <br/>Equipamentos</div></button>
          <button type="submit"><FiPlus size={30} color="#FFFFFF" />Adicionar uma preventiva</button>
        </div>
          <div className="test">
          <p>Dashboard</p>
          </div>

          <div className="cards-container">
          <div className="cards">
          </div>
          <div className="cards">
          </div>
          <div className="cards">
          </div>

          </div>
      </div>
    </div>
  );
}