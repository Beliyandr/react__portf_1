import './styles/reset.css'
import './styles/common.css'

import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactsPage } from './pages/ContactsPage';



function App() {

  return (
    <div className="App">
      <NavBar />
      {/* <HomePage /> */}
      <ProjectsPage />
      {/* <ContactsPage /> */}
      <Footer />

    </div>

  )
}

export default App;
