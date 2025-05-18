import './styles/reset.css'
import './styles/common.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactsPage } from './pages/ContactsPage';
import { ProjectPage } from './pages/ProjectPage';
import { ScrolToTop } from './utils/ScrolToTop';




function App() {

  return (
    <div className="App">

      <Router>
        <ScrolToTop />
        <NavBar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/project/:id' element={<ProjectPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
        </Routes>

        <Footer />

      </Router>

    </div>

  )
}

export default App;
