import React from 'react'

import './ButtonGitHub.scss'

import gitHubimg from './../../img/icons/gitHub-black.svg'
import { Link } from 'react-router-dom'

export const ButtonGitHub = ({ link }) => {
  return (
    <Link to={link} className="btn-outline" target='_blank' rel="noreferrer">
      <img src={gitHubimg} alt="" />
      GitHub repo
    </Link>
  )
}
