import React from "react";
import "./navbar.css";
function getSelectedText() {
  if (window.getSelection) {
    console.log(window.getSelection().toString());
  } else if (document.selection) {
    console.log(document.selection.createRange().text);
  } else {
    console.log("No text selected");
  }
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li onMouseUp={getSelectedText}>Home</li>
        <li>Mes cours</li>
        <li>Bibliotéque</li>
      </ul>
    </nav>
  );
};

export default Navbar;
