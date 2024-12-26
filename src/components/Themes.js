import React from 'react'

function Themes(theme) {
    const Theme_primary ={
        lighter:{
            light :'primary',
            dark : "dark",
            textTheme: "#0a0d10"
        },
        darker:{
            light :'dark',
            dark : "light",
            textTheme: "white"
        }
    }
    switch (theme) {
        case 'Theme_primary':
            theme = Theme_primary
            break;
        default:
            break;
    }
  return theme
}
export default Themes