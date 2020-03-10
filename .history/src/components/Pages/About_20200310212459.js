import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function About(){
    return(
        <React.Fragment>
            <NavLink style={linkStyle} to="/about">About</NavLink>|<NavLink style={linkStyle} to="/">Home</NavLink>
        </React.Fragment>
    )
}

const linkStyle={
    color:'#fff',
    textDecoration:'none'
}

export default About;
