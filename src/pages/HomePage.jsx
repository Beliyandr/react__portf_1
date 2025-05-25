import React from 'react'
import { Header } from '../components/Header/Header'

export const HomePage = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p> HTML, CSS, SCSS, JavaScript, TypeScript, ReactJS, Redux, NPM, BootStrap, MaterialUI</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              {/* <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p> */}
              <p> - - - </p>
            </li>
          </ul>
        </div>
      </main>

    </>
  )
}
