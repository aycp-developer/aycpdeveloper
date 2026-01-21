import React from 'react';
import './Technologies.css';
import { DynamicText } from '../../exports/exports';

const Technologies = () => {

    const fullTeckStack = [
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" /> },
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />, },
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" /> },
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" /> },
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /> },
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" /> },
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" /> },
        { icon: <i className="devicon-bash-plain icon bash" /> },
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" /> },
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" /> },
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" /> },
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" style={{ height: '94%', width: '100%' }} /> },
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" /> },
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" /> },
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" /> },
        { icon: <i className="devicon-express-original icon express" /> },
        { icon: <img className='svg-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" /> },
        { icon: <i className="devicon-github-original icon github" /> }
    ];

    return (
        <div className='technologies'>
            <span className='knowledge-subtitle'>
                <DynamicText
                    strings='CONOCIMIENTO'
                    autoStart={true}
                    loop={true}
                    delay={70}
                    deleteSpeed={50}
                />
            </span>
            <h2 className='technologies-title'>
                Tecnologías
            </h2>
            <p className='tech-stack-names-paragraph'>
                Lenguajes de Programación, Frameworks, Librerías, Bases de Datos, ORMs, VCS y Alojador de Proyectos.
            </p>
            <div className='tech-stack'>
                {fullTeckStack.map((icon, index) => (
                    <div className='icon' key={index}>
                        {icon.icon}
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Technologies;