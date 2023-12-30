import React from 'react';

import Project from "../components/Project/Project";

import {projects} from "../helpers/projectList";

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((card, index) => {
                        return <Project
                            key={index}
                            idCard={index}
                            title={card.title}
                            img={card.img}
                        />
                    })}

                </ul>
            </div>
        </main>
    );
};

export default Projects;