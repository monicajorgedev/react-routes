import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import {studies, experiences} from '../data/resume.js'

function Resume() {
    return (
        <>
        <div className="main">
            <Link to={'/'}>Home</Link>
            <h1>Resume</h1>
            <div className="container">
                <div>
                    <h2>Studies</h2>
                    {studies.map((study)=> {
                        return (
                        <ul key={study.id}>
                            <li>ID: {study.id}</li>
                            <li>title: {study.title}</li>
                            <li>institución: {study.institucion}</li>
                            <li>date: {study.date}</li>
                        </ul>
                        )
                    })}
                </div>
                <div>
                    <h2>Experiences</h2>
                    {experiences.map((experience)=> {
                        return (
                        <ul key={experience.id}>
                            <li>ID: {experience.id}</li>
                            <li>title: {experience.title}</li>
                            <li>company: {experience.institucion}</li>
                            <li>date: {experience.date}</li>
                        </ul>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default Resume