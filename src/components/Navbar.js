import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import logo from '../components/favicon.ico'
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${((props.mode).main)}`} data-bs-auto-close="true" data-bs-theme={`${(props.mode).main}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="30" height="30"  class="d-inline-block align-text-top"/>   
            {props.title}
          </Link>
          <button className="navbar-toggler" type="button" 
              data-bs-toggle="collapse" data-bs-target="#navbarContent" 
              aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Me</Link>
              </li>
            </ul>
            <div className="nav-item dropdown mx-3">
              <button className= {`btn btn-${props.mode.main} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Themes
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={() => props.changeTheme('Theme_primary')}>Primary</button></li>
                <li><button className="dropdown-item" onClick={() => props.changeTheme('Theme_secondary')}>Secondary</button></li>
                <li><button className="dropdown-item" onClick={() => props.changeTheme('Theme_green')} >Green</button></li>
              </ul>
            </div>
            <div className={`form-check form-switch text-${props.mode.sub}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="DarkMode" onClick={props.toggleMode}/>
              <label className="form-check-label" for="DarkMode">DarkMode</label>
            </div>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Pardhu Chowdary"
}
