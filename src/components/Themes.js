import React from 'react'

function Themes(theme) {
    const Theme_primary ={
        lighter:{
            main :'primary',
            btn :'primary',
            sub : "dark",
            textTheme: "#0a0d10",
            bg : 'white'
        },
        darker:{
            main :'dark',
            sub : "light",
            btn : "light",
            textTheme: "white",
            bg : 'rgb(0 29 58)'
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