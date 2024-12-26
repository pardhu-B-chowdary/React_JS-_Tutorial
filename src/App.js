import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Themes from './components/Themes';
//import About from './components/About';

function App() {
  //Enable and Disable Dark Mode.
  const [mode, setMode] = useState('primary')
  const toggleMode = () => {
    if (mode === 'primary'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(0 29 58)'
      showAlert("Dark Mode is been Enabled", "secondary")
    }
    else {
      setMode('primary')
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
      <Navbar title = 'Pardhu App' mode = {mode} toggleMode ={toggleMode} />
      <div className="container my-2">
        <TextForm heading = "Enter your text here" mode = {mode} showAlert={showAlert}/>
        {/* <About /> */}
      </div>
      <Alert alert = {alert} />
    </>
  );
}

export default App;
