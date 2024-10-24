import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import projects from "../data/projects.js";

function Projects() {
    return (
        <>
        <div className="main">
            <Link to={'/'}>Home</Link>
            <h1>Projects</h1>
            <div className="container">
             {projects.map((project)=> {
                return (
                <ul key={project.id}>
                    <li>ID: {project.id}</li>
                    <li>Name: {project.name}</li>
                    <li><img src={project.image} alt={project.name}></img></li>
                    <li>Description: {project.description}</li>
                    <li><a href={project.url}>{project.url}</a></li>
                </ul>
                )
             })}
             </div>
        </div>
        </>
    )
}



export default Projects