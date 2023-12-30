import React from 'react';

import icon from '../../img/icons/gitHub-black.svg'

const Button = ({ link }) => {
    return (
        <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
            <img src={icon} alt=""/>
            GitHub repo
        </a>
    );
};

export default Button;