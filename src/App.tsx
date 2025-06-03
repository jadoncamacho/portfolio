import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <section id="home" className="section">
          <h1>Hello!</h1>
          <h1>
            I am Jadon Camacho, a Computer Science student at San Jose State University and aspiring front end developer! 
            Here you can see my work and learn more about me.
          </h1>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <h3> 
            Currently, I am a student at SJSU looking to complete a Bachelor of Science in Computer Science this coming Fall 2025, and I have a previous education
            in computer science topics from the College of San Mateo. During my time in San Jose, I studied the basics of a variety of topics including: Software
            Development, Operating Systems, Machine Learning, Mobile Device Development, Database Management, and more. Throughout my education I have developed a 
            particular passion for software development and I hope to continue to grow my knowledge of these fields and provide blissful experiences for users.
          </h3>
          <h3>
            In my free time I am deepy involved with the fighting game esports scene. In particular I am a passionate member of the Tekken, Street Fighter, and Super 
            Smash Bros. Melee communities. I strive to use technology to further build communities and provide fluid digital experiences for community members and 
            anyone interested in getting involved!
          </h3>
        </section>

        <section id="projects" className="section">
          <h2>My Projects</h2>
          <h3>
            Take a look at some of the projects I have been working on!
          </h3>
        </section>
      </main>
    </div>
  )
}

export default App
