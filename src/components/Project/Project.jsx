import React from 'react'
import './Project.scss'
import { NavLink } from 'react-router-dom'



export const Project = ({ title, img, index }) => {
  return (
    <li className="project">
      <NavLink to={`/project/${index}`}>
        <img src={img} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  )
}
