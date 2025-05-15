import React from 'react'
import './Project.css'
import imgProj1Big from './../../img/projects/01-big.jpg'
import gitHubBig from './../../img/icons/gitHub-black.svg'

export const Project = ({ title, img }) => {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">

          <h1 className="title-1">Video service</h1>

          <img src={imgProj1Big} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <a href="#!" className="btn-outline">
            <img src={gitHubBig} alt="" />
            GitHub repo
          </a>

        </div>
      </div>
    </main>
  )
}
