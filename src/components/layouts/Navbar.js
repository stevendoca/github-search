import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => { // destructure props.icon and props.title
    return (
        <nav class="navbar navbar-dark bg-dark">
            <h1 className="text-white">
                <i className={icon} />
                {title}
            </h1>
        </nav>            
    )
};
Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
