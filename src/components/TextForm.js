import React from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  return (
    <>
        <h1>{props.heading}</h1> 
        <div class="mb-3">
        <textarea class="form-control" id="my-form" rows="8"></textarea>
        </div>
        <button>Convert to Uppercase</button>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defautProps = {
    heading: "You missed to write here"
}