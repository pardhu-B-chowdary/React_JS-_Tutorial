import React from 'react'

function Themes(theme) {
    const Theme_primary ={
        lighter:
            {main:'primary',
            sub:'dark', 
            btn:'primary',
            textTheme: '#0a0d10',
            textbg: 'white',
            bg: 'white'
        }
        ,
        darker:{
            main :'dark',
            sub : "light",
            btn : "light",
            textTheme: "white",
            textbg: 'rgb(94 138 182)',
            bg : 'rgb(0 29 58)'
        }
    }
    const Theme_secondary ={
        lighter:{
            main :'secondary',
            btn :'secondary',
            sub : "light",
            textTheme: "#0a0d10",
            bg : '#df3421'
        },
        darker:{
            main :'dark',
            sub : "light",
            btn : "light",
            textTheme: "white",
            bg : '#4598da'
        }
    }
    const Theme_green ={
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
        case 'Theme_secondary':
            theme = Theme_secondary
            break;
        case 'Theme_green':
            theme = Theme_green
            break;
        default:
            break;
    }
  return theme
}
export default Themes