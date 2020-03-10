import React from 'react';
import { Link } from 'react-router-dom';

function About(){
    return(
        <React.Fragment>
            <Link style={linkStyle} to="/about">About</Link>|<Link style={linkStyle} to="/">Home</Link>
        </React.Fragment>
    )
}

const linkStyle={
    color:'#fff',
    textDecoration:'none'
}

export default About;
