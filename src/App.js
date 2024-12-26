import './App.css';
import React, {use, useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Themes from './components/Themes';
//import About from './components/About';

function App() {
  //Enable and Disable Dark Mode.
  const [mode, setMode] = useState({light:'primary', dark:'dark', text: '#0a0d10'})
  const [themeMode, setThemeMode] = useState('light')
  const [theme, setTheme] = useState('Theme_primary')
  const changeTheme =(e) =>{
    switch (e) {
      case 'primary':
        setTheme('Theme_primary')
        break;
      default:
        break;
    }
    
  }
  const toggleMode = () => {
    if (themeMode === 'light'){
      let presTheme = Themes(theme)
      setMode(presTheme.darker)
      setThemeMode('dark')
      document.body.style.backgroundColor = 'rgb(0 29 58)'
      showAlert("Dark Mode is been Enabled", "secondary")
    }
    else {
      let presTheme = Themes(theme)
      setMode(presTheme.lighter)
      setThemeMode('light')
      document.body.style.backgroundColor = 'white' 
      showAlert("Light Mode is been Enabled", "secondary")
    }
  }

  //Alert messages for the site
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
    setAlert({msg:message, type:type})
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
    
  return (
    <>
      <Navbar title = 'Pardhu App' mode = {mode} toggleMode ={toggleMode} changeTheme ={changeTheme}/>
      <div className="container my-2">
        <TextForm heading = "Enter your text here" mode = {mode} showAlert={showAlert}/>
        {/* <About /> */}
      </div>
      <Alert alert = {alert} />
    </>
  );
}

export default App;
