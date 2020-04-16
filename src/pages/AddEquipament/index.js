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
  FiHardDrive,
  FiCheckCircle,
  FiTrendingUp,
  FiCalendar,
  FiAlertCircle,
} from "react-icons/fi";
import Rogerinho from "../../assets/images/profile.jpg";

//import {} from 'react-icons/fi'

import "./styles.css";

export default function AddEquipament() {
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
          <div className="button-house">
            <button type="submit">
              <FiEdit2 size={25} color="#612F74" />
              <div className="text-container">
                <span>
                  Gerenciar <br />
                  Equipamentos
                </span>
              </div>
            </button>
            <button type="submit">
              <FiPlus size={30} color="#FFFFFF" />
              <span>Adicionar preventiva</span>
            </button>
          </div>
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
          <p>Adicionar Equipamento</p>
        </div>

        <div className="cards-container">
          <div className="cards">
            <form action="" method="post">
              <div className="form">
                <div className="colum1">
                  <input placeholder="Nome do Equipamento" />
                  <input placeholder="Modelo do Equipamento" />
                  <input placeholder="Hostname" />
                  <input placeholder="Sistema Operacional" />
                  <input placeholder="Técnico Responsável" />
                </div>
                <div className="colum2">
                  <input placeholder="Número de Série" />
                  <input placeholder="Tipo de Equipamento" />
                  <input placeholder="Voltagem" />
                  <input placeholder="Validada da Preventiva" />
                  <textarea type="text" placeholder="Voltagem" />
                </div>
              </div>
            </form>
            <div className="button">
              <button type="submit">Voltar</button>
              <button type="submit">Adicionar Equipamento</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
