import React from 'react';

import { NavLink } from "react-router-dom";

const Project = ({ idCard, title, img }) => {
    return (
        <li className="project" data-index={idCard}>
            <NavLink to={`/detail/${idCard}`}>
                <img src={img} alt={title} className="project__img"/>
                <h3 className="project__title">{title}</h3>
            </NavLink>
        </li>
    );
};

export default Project;