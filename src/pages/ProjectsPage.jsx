import React from 'react'

import { Project } from '../components/Project'

import { projects } from '../helper/projectsList'



export const ProjectsPage = () => {

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">

          {projects.map((proj) => {
            return (
              <Project title={proj.title} img={proj.img} key={proj.id} index={proj.id} />
            )
          })}

        </ul>
      </div>
    </main>
  )
}
