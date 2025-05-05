import './Projects.css';
import {
  SiFlutter,
  SiAmazonwebservices,
  SiPython,
  SiSupabase,
  SiGooglecloud,
  SiRaspberrypi,
  SiArduino,
  SiC
} from 'react-icons/si';

import { FaJava } from "react-icons/fa";
import { FaDartLang } from "react-icons/fa6";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <p>Here are some of the things I've built recently.</p>
      </div>

      <div className="project-cards">
        <div className="project-card">
          <h3>UniMatch</h3>
          <div className="tech-icons">
            <FaDartLang size={24} title="Dart"/>
            <SiSupabase size={24} title="Supabase" />
            <SiGooglecloud size={24} title="Google Cloud" />
            <SiFlutter size={24} title="Flutter" />
          </div>
          <p>
            A social platform for university students to connect based on shared interests, built using Flutter and Supabase.
            It facilitates collaboration and networking within campus communities.
          </p>
          <a href="https://github.com/nihalramesh/UniMatch" target="_blank" rel="noopener noreferrer" className="github-link">
            🔗 View on GitHub
          </a>
          <span style={{ margin: '0 10px' }}></span>
          <a href="https://youtu.be/SSJPL86D6n8" target="_blank" rel="noopener noreferrer" className="demo-link">
            ▶️ Watch Demo
          </a>
        </div>

        <div className="project-card">
          <h3>StockGenie</h3>
          <div className="tech-icons">
            <SiPython size={24} title="Python" />
            <SiAmazonwebservices size={24} title="AWS" />
            <SiSupabase size={24} title="Supabase" />
          </div>
          <p>
            A trading stock telegram bot that allows the user to check/list/track stocks.
          </p>
          <a href="https://github.com/tejaskumar0/StockGenie" target="_blank" rel="noopener noreferrer" className="github-link">
            🔗 View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Project Alex</h3>
          <div className="tech-icons">
            <SiC size={24} title="C" />
            <SiRaspberrypi size={24} title="Raspberry Pi" />
            <SiArduino size={24} title="Arduino" />
          </div>
          <p>
            A teleoperated robot built using Raspberry Pi and Arduino for object manipulation and medpack delivery. Features dual control input and real-time feedback. Watch the demo of our robot here!
          </p>
          <a href="https://github.com/tejaskumar0/tp" target="_blank" rel="noopener noreferrer" className="github-link">
            🔗 View on GitHub
          </a>
          <span style={{ margin: '0 10px' }}></span>
          <a href="https://www.youtube.com/watch?v=ZOAmFA7Wp0k" target="_blank" rel="noopener noreferrer" className="demo-link">
            ▶️ Watch Demo
          </a>
        </div>

        <div className="project-card">
          <h3>Budget Buddy</h3>
          <div className="tech-icons">
            <FaJava size={24} title="Java" />
          </div>
          <p>
            A personal finance tracker built in Java that helps users manage expenses, set spending limits, and receive alerts when nearing their budget thresholds.
          </p>
          <a href="https://github.com/tejaskumar0/tp" target="_blank" rel="noopener noreferrer" className="github-link">
            🔗 View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;