import React, { useState } from 'react'
// import PropTypes from 'prop-types'


export default function TextForm(props) {

  function handleClick(key){
    //modifies the text
    let newText = formText
    switch (key) {
      case 'upper':
        newText = formText.toUpperCase()    
        props.showAlert("Conveted to Upper Case", "info")    
        break;
      case 'lower':
        newText = formText.toLowerCase()        
        props.showAlert("Conveted to Lower Case", "info")    
        break;
      case 'captalize':
        newText = formText.split(" ").map((word) => {return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}).join(" ")
        props.showAlert("Conveted to Capitalize", "info")    
        break;
      case 'clear':
        newText = ''       
        props.showAlert("Cleared Text", "info")    
        break;
      case 'copy':      
        navigator.clipboard.writeText(formText)
        props.showAlert("Copied to Clipboard", "info")    
        break
      case 'trim':
        newText = formText.split(/[" "]+/).join(' ')
        props.showAlert("Text Trimmed", "info")    
        break
      default:
        break;
    }
    setFormText(newText)
  }
  const handleOnChange = (e) => {
    //console.log("values changed to " + e.target.value)
    setFormText(e.target.value)
  }

  const [formText, setFormText] = useState('')
  let textData = formText.trim().split(/\s+/).filter(word => word !== '')
  return (
    <>
      <div className='container' style={{color: props.mode.textTheme}}>
        <h1 >{props.heading}</h1> 
        <div class="mb-3">
          <textarea className="form-control" id="my-form" onChange={handleOnChange} 
          placeholder='Enter text Here' value={formText} rows="8"
          style={{backgroundColor: props.mode !== 'dark'? 'white':'rgb(94 138 182)', 
          color: props.mode.text}}></textarea>
        </div>
        <button className={`btn btn-${props.mode.btn} m-2`} onClick={() => handleClick('upper')} >Uppercase</button>
        <button className={`btn btn-${props.mode.btn} m-3`} onClick={() => handleClick('lower')} >Lowercase</button>
        <button className={`btn btn-${props.mode.btn} m-3`} onClick={() => handleClick('captalize')} >Captalize</button>
        <button className={`btn btn-${props.mode.btn} m-3`} onClick={() => handleClick('copy')} >Copy Text</button>
        <button className={`btn btn-${props.mode.btn} m-3`} onClick={() => handleClick('trim')} >Trim spaces</button>
        <button className={`btn btn-${props.mode.btn} m-3`} onClick={() => handleClick('clear')} >Clear text</button>
      </div>
      <div className="container my-4" style={{color: props.mode.textTheme}}>
        <h1>Your Text Summary</h1>
        <p> {textData.length} words, {textData.join(" ").length} characters</p>
        <p>Time to read the Sentence: {(textData.length * 0.008).toFixed(2)} Minutes / {(textData.length * 0.48).toFixed(2)} Seconds </p>
        <h3>Preview</h3>
        <p>{formText.length?formText:'Enter Something to preview it here'}</p>
      </div>
    </>
  )
}

// TextForm.propTypes = {
//     heading: PropTypes.string
// }
// TextForm.defautProps = {
//     heading: "You missed to write here"
// }