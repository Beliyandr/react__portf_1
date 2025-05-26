import { useState } from 'react'
import './NavBar.scss'

import { NavLink } from 'react-router-dom'
import { ButtonDarkMode } from '../ButtonDarkMode'

import closeIcon from './../../img/icons/close_2.png'
import burgerIcon from './../../img/icons/burger.png'


export const NavBar = () => {

  const [isACtive, setIsActive] = useState(false);

  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link'

  return (
    <nav className={(isACtive ? 'nav nav__active' : 'nav')}>
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo"><strong>Portfolio</strong> </NavLink>

          <ButtonDarkMode />

          <ul className="nav-list" >
            <li className="nav-list__item"><NavLink to="/" onClick={() => setIsActive(false)} className={({ isActive }) => isActive ? activeLink : normalLink}>Home</NavLink></li>
            <li className="nav-list__item"><NavLink to="/projects" onClick={() => setIsActive(false)} className={({ isActive }) => isActive ? activeLink : normalLink}>Projects</NavLink></li>
            <li className="nav-list__item"><NavLink to="/contacts" onClick={() => setIsActive(false)} className={({ isActive }) => isActive ? activeLink : normalLink}>Contacts</NavLink></li>
          </ul>

          <button
            className='burger'
            onClick={() => setIsActive(!isACtive)}
          >
            {isACtive ? (
              <img src={closeIcon} alt="burger-menu" />
            ) : (
              <img src={burgerIcon} alt="burger-menu" />
            )}
          </button>



        </div>
      </div>
    </nav>
  )
}
