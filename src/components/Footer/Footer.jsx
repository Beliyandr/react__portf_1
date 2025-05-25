import React from 'react'
import './Footer.scss'


import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import gitHub from './../../img/icons/gitHub.svg';
import linkedIn from './../../img/icons/linkedIn.svg';

const date = new Date();



export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {/* <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li> */}
            {/* <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li> */}
            <li className="social__item"><a href="https://github.com/Beliyandr"><img src={gitHub} alt="Link" /></a></li>
            <li className="social__item"><a href="https://linkedin.com/in/andrey-beliavtsev"><img src={linkedIn} alt="Link" /></a></li>
          </ul>
          <div className="copyright">
            <p>© {date.getFullYear()} </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
