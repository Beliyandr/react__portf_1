import React from 'react'

export const ContactsPage = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Kamyanske, Ukraine</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram </h2>
            <p><a href="tel:+380502424958">+38 (050) 242-49-58</a></p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p><a href="mailto:beliavtsev.andrey@gmail.com">beliavtsev.andrey@gmail.com</a></p>
          </li>
        </ul>

      </div>
    </main>
  )
}
