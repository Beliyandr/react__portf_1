import React from 'react'

import imgProj1 from './../img/projects/01.jpg'
import imgProj2 from './../img/projects/02.jpg'
import imgProj3 from './../img/projects/03.jpg'
import imgProj4 from './../img/projects/04.jpg'
import imgProj5 from './../img/projects/05.jpg'
import imgProj6 from './../img/projects/06.jpg'
import { Project } from '../components/Project'

import { projects } from '../helper/projectsList'



export const ProjectsPage = () => {

  console.log(projects)

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">

          {projects.map((proj) => {
            return (
              <Project />
            )
          })}

          <Project />
          <Project />



          {/* <li className="project">
            <a href="./project-page.html">
              <img src={imgProj1} alt="Project img" className="project__img" />
              <h3 className="project__title">Gaming streaming portal</h3>
            </a>
          </li>
          <li className="project">
            <a href="./project-page.html">
              <img src={imgProj2} alt="Project img" className="project__img" />
              <h3 className="project__title">Video service</h3>
            </a>
          </li>
          <li className="project">
            <a href="./project-page.html">
              <img src={imgProj3} alt="Project img" className="project__img" />
              <h3 className="project__title">Video portal</h3>
            </a>
          </li>

          <li className="project">
            <img src={imgProj4} alt="Project img" className="project__img" />
            <h3 className="project__title">Dating app</h3>
          </li>
          <li className="project">
            <img src={imgProj5} alt="Project img" className="project__img" />
            <h3 className="project__title">Landing</h3>
          </li>
          <li className="project">
            <img src={imgProj6} alt="Project img" className="project__img" />
            <h3 className="project__title">Gaming community</h3>
          </li> */}

        </ul>
      </div>
    </main>
  )
}
