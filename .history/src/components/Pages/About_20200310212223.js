import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function About(){
    return(
        <React.Fragment>
            <NavLink to="/about">About</NavLink>|<NavLink to="/">Home</NavLink>
        </React.Fragment>
    )
}

export default About;
