import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <React.Fragment>
        <h1 style={headerStyle}>TodoList</h1>
        <Link style={linkStyle} to="/about">About</Link>|<Link style={linkStyle} to="/">Home</Link>
        </React.Fragment>
    )
}

const headerStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'2px'

}
const linkStyle={
    color:'#fff',
    textDecoration:'none'
}

export default Header;