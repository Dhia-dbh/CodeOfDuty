import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/cours")}>Mes cours</li>
        <li onClick={() => navigate("/biblio")}>Bibliotéque</li>
      </ul>
    </nav>
  );
};

export default Navbar;
