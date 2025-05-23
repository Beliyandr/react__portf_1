import { useEffect } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'
import { detectDarkMode } from '../../utils/detectDarkMode'
import './ButtonDarkMode.scss'

import sun from './sun.svg'
import moon from './moon.svg'

export const ButtonDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }

  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme)
      });
  }, [])

  const btnNormal = 'dark-mode-btn';
  const btnActive = 'dark-mode-btn dark-mode-btn--active'

  return (
    <button className={darkMode === 'dark' ? btnNormal : btnActive} onClick={toggleDarkMode} >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>

  )
}
