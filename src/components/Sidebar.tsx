import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { useState } from 'react';
import './Sidebar.css';

interface NavItem {
  title: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  { title: 'Home', sectionId: 'home' },
  { title: 'About', sectionId: 'about' },
  { title: 'Projects', sectionId: 'projects' },
  { title: 'Skills', sectionId: 'skills' },
  { title: 'Contact', sectionId: 'contact' },
];

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src="/your-profile-photo.jpg" alt="Profile" />
          </div>
          <h2>Jadon Camacho</h2>
          <p>Web Developer</p>
        </div>

        <nav className="nav-links">
          <ul>
            {navItems.map((item) => (
              <li key={item.sectionId}>
                <button onClick={() => scrollToSection(item.sectionId)}>
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="social-links">
          <a
            href="https://github.com/jadoncamacho"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/jadon-camacho"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className="resume-link"
          >
            <FaFileAlt size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 