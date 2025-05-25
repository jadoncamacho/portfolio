import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope, FaBars} from 'react-icons/fa';
import { useState } from 'react';
import './Sidebar.css';
import profileImage from '/home/juma/coding/portfolio/public/image.png';

interface NavItem {
  title: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  { title: 'Home', sectionId: 'home' },
  { title: 'About', sectionId: 'about' },
  { title: 'Projects', sectionId: 'projects' }
];

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src={profileImage} alt="Profile" />
          </div>
          <h2>Jadon Camacho</h2>
          <p>San Mateo, CA</p>
        </div>

        <div className="nav-section">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <FaBars size={24} />
          </button>

          <nav className="nav-links">
            <ul>
              {navItems.map((item) => (
                <li key={item.sectionId}>
                  <button 
                    onClick={() => scrollToSection(item.sectionId)}
                    aria-label="Main Navigation"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="social-links">
          <h2>
            Connect With Me:
          </h2>
          <a
            href="mailto:jadon.camacho@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
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
            href="./jadon-camacho-resume-2025.pdf"
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