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
          <h2>Your Name</h2>
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
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 