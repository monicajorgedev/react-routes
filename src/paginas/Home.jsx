import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="main">
                <h1>Bienvenido/a</h1>
                <Link to={'/projects'}>Projects</Link>
                <p> </p>
                <Link to={'/resume'}>Resume</Link>
            </div>
        </>
    )
}

export default Home