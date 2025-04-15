import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <section id="home" className="section">
          <img src="./image.png" alt="Profile" />
          <h1>Welcome to My Portfolio</h1>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
        </section>

        <section id="projects" className="section">
          <h2>My Projects</h2>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
        </section>

        <section id="contact" className="section">
          <h2>Contact Me</h2>
        </section>
      </main>
    </div>
  )
}

export default App
