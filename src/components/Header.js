import './Header.css';
import profilePic from '../images/IMG_0730.png';

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">Hi, I'm <strong>Tejas Ananth Kumar</strong></h1>
      <h2 className="header-subtitle">Welcome to My Interactive Profile</h2>
      <p className="header-description">
        Tech Enthusiast | Problem Solver | Creative Thinker | Computer Engineer
      </p>
      <div className="profile-image-wrapper">
        <img
          src={profilePic} 
          alt="Tejas Ananth Kumar"
          className="profile-image"
        />
      </div>
      <nav className="header-nav">
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;