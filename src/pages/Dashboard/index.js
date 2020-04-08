import React from "react";
import { FiFolder, FiBarChart2, FiPlusCircle, FiLock } from "react-icons/fi";

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
        <div className="header">Header of ths shit</div>
        <div className="title-header">
          <p>Dashboard</p>
          <p>Panorama geral de sua empresa</p>
          <button type="submit">Gerenciar</button>
          <button type="submit">Adicionar uma preventiva</button>
        </div>
      </div>
    </div>
  );
}
