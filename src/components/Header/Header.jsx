import React from 'react'
import './Header.scss'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Hi, my name is <em>Andrew!</em></strong><br />
          I am a <span style={{ color: 'grey' }}>junior</span> front-end developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <div className="header__box">

          <a href="https://github.com/Beliyandr" className="btn">Link to GitHub</a>
          <a href="https://www.linkedin.com/in/andrey-beliavtsev/" className="btn">Link to Linkedin</a>
          {/* <a href="https://robota.ua/candidates/22832010" className="btn">Link to Rabota.ua</a> */}
        </div>
      </div>
    </header>
  )
}
