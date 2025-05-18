import React from 'react'

import { useParams } from 'react-router-dom'

import { ButtonGitHub } from '../components/ButtonGitHub/ButtonGitHub'


import img from './../img/projects/02-big.jpg'
import { projects } from '../helper/projectsList'


export const ProjectPage = () => {

  const { id } = useParams();
  // const project = projects.filter(proj => proj.id === +id);
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">

          <h1 className="title-1">{project.title}</h1>

          <img src={project.imgBig} alt={project.title} className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink &&
            <ButtonGitHub link={project.gitHubLink} />
          }

        </div>
      </div>
    </main>
  )
}
