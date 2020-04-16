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
  FiCamera,
} from "react-icons/fi";
import Rogerinho from "../../assets/images/profile.jpg";

//import {} from 'react-icons/fi'

import "./styles.css";

export default function ListEquipament() {
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
          <p>Atualização de Equipamentos</p>
        </div>

        <div className="cards-container">
          <div className="cards">
          <FiHardDrive size={110} color="#422047" />
          <p>DSK-IBM-02</p>
          <div className="input-edits">
            <form action="">
              <div className="colum1">
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              </div>
              <div className="colum2">
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
              </div>
            </form>
            <div className="table">

</div>
              <div className="button-house">
                <button type="submit">Cancelar</button>
                <button type="submit">Atualizar</button>
              </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
