import {studies, experiences} from '../data/resume.js'

function Resume() {
    return (
        <>
        <div className="main">
            <h1>Resume</h1>
            <div className="container">
                <div>
                    <h2>Studies</h2>
                    <ul>
                    {studies.map((study)=> {
                        return (
                        <li key={study.id}>
                            <h2>title: {study.title}</h2>
                            <p>institución: {study.institucion}</p>
                            <p>date: {study.date}</p>
                        </li>
                        )
                    })}
                    </ul>
                </div>
                <div>
                    <h2>Experiences</h2>
                    <ul>
                    {experiences.map((experience)=> {
                        return (
                        <li key={experience.id}>
                            <p>title: {experience.title}</p>
                            <p>company: {experience.institucion}</p>
                            <p>date: {experience.date}</p>
                        </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Resume