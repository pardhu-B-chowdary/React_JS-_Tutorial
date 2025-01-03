import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Themes from './components/Themes';
import About from './components/About';

export default function App() {
  //Enable and Disable Dark Mode.
  const [mode, setMode] = useState(Themes('Theme_primary').lighter)
  const [themeMode, setThemeMode] = useState('light')
  const [theme, setTheme] = useState('Theme_primary')
  const [myStyle, setMyStyle] = useState({color: 'black', backgroundColor: 'white', border: '1px solid white'})
  
  const changeTheme =(e) =>{
    let presTheme = themeMode !== 'dark'? Themes(e).lighter: Themes(e).darker
    setTheme(e)
    setMode(presTheme)
    document.body.style.backgroundColor = presTheme.bg
    showAlert(`Changed mode to ${e}`, 'danger')
  }
  const toggleMode = (e) => {
    if (themeMode === 'light'){
      let presTheme = Themes(theme)
      setMode(presTheme.darker)
      setThemeMode('dark')
      document.body.style.backgroundColor = presTheme.darker.bg
      showAlert("Dark Mode is been Enabled", "secondary")
    }
    else {
      let presTheme = Themes(theme)
      setMode(presTheme.lighter)
      setThemeMode('light')
      document.body.style.backgroundColor = presTheme.lighter.bg
      showAlert("Light Mode is been Enabled", "secondary")
    }
  }

  //Alert messages for the site
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
    setAlert({msg:message, type:type})
    setTimeout(() => {
      setAlert(null)
    }, 500);
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar title = 'Pardhu App' mode = {mode} toggleMode ={toggleMode} changeTheme ={changeTheme} changeBody ={changeBody} />
      </div>
      <div className="container my-2">
      <Routes>
        <Route exact path="/" element={<TextForm heading = "Enter your text here" mode = {mode} showAlert={showAlert}/>}/>
        <Route exact path="/about" element={<About />}/>
      </Routes>
      </div>
      <Alert alert = {alert} />
    </BrowserRouter>
  );
}