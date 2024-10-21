import React, { useEffect, useState } from 'react';
import ProjectBox from './ProjectBox';
import './Projects.css';

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchGitHubProjects = async () => {
            const response = await fetch('https://api.github.com/users/alwrence9/repos');
            const data = await response.json();
            setRepos(data);
        };

        fetchGitHubProjects();
    }, []);

    return (
        <section id="projects">
            <h1>My projects</h1>
            <div id="project__boxes">
                {repos.map((repo) => (
                    <ProjectBox
                        key={repo.id}
                        title={repo.name}
                        description={repo.description}
                        url={repo.html_url}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
