import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <>
    <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
  <div className="bg-dark p-4">
    <h5 className="text-body-emphasis h4">Collapsed content</h5>
    <span className="text-body-secondary">Toggleable via the navbar brand.</span>
  </div>
</div>
      <nav className={`navbar navbar-expand-lg bg-${(props.mode.light)}`} data-bs-theme={`${props.mode.light}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" 
              data-bs-toggle="collapse" data-bs-target="#navbarContent" 
              aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Additional</a>
              </li>
            </ul>
            <div class="nav-item dropdown mx-3">
              <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Themes
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item" onClick={props.changeTheme('primary')}>Primary</button></li>
                <li><button class="dropdown-item" onClick={props.changeTheme('Secondary')}>Secondary</button></li>
                <li><button class="dropdown-item" onClick={props.changeTheme('Green')} >Green</button></li>
              </ul>
            </div>
            <div className={`form-check form-switch text-${props.mode.dark}`}>
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
