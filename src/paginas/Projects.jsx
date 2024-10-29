import projects from "../data/projects.js";

function Projects() {
    return (
        <>
        <div className="main">
            <h1>Projects</h1>
            <div className="container">
                <ul>
             {projects.map((project)=> {
                return (
                <li key={project.id}>
                    <p>ID: {project.id}</p>
                    <h2>Name: {project.name}</h2>
                    <img src={project.image} alt={project.name}/>
                    <p>Description: {project.description}</p>
                    <a href={project.url}>{project.url}</a>
                </li>
                )
             })}
             </ul>
             </div>
        </div>
        </>
    )
}



export default Projects