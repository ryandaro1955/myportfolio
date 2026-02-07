import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Import your page components
import About from '../app/guest/about/page'
import Blogs from '../app/guest/blogs/page'
import Project from '../app/guest/project/page'
import Admin from '../app/admin/page'

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
