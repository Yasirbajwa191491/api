import React from 'react'
import { NavLink} from "react-router-dom"
import "../App.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <NavLink className="navbar-brand" to="/" style={{fontSize:"15px"}}>Yasir191491</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/" style={{fontSize:"15px"}}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/add" style={{fontSize:"15px"}}>Add_New</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" style={{fontSize:"15px"}}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" style={{fontSize:"15px"}}>Contact</NavLink>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar