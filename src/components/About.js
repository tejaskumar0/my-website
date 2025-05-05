import './About.css';
import { useEffect, useState } from 'react';
import {
  SiCplusplus,
  SiPython,
  SiSupabase,
  SiGooglecloud,
  SiRaspberrypi,
  SiArduino,
  SiC
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';

const About = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-card">
        <h2>About Me</h2>
        <p>
          I'm currently a third-year student at the National University of Singapore (NUS), pursuing a degree in Computer Engineering.
          With a strong passion for technology, I am driven by the desire to create innovative solutions that address sustainability challenges and make a positive impact on society.
          My academic and personal projects reflect my commitment to leveraging engineering principles and cutting-edge technology to solve real-world problems.
        </p>
        <p>
          This personal profile provides an insight into my academic journey, projects, and professional experiences.
          Feel free to explore my work and get in touch for collaborations or opportunities where I can contribute to meaningful initiatives.
        </p>
      </div>

      <div className="tech-card">
        <div className="tech-icons">
          {slideIndex === 0 ? (
            <>
              <SiCplusplus size={40} color="#00599C" />
              <DiJava size={40} color="#007396" />
              <SiPython size={40} color="#3776AB" />
              <SiSupabase size={40} color="#3ECF8E" />
              <SiGooglecloud size={40} color="#EA4335" />
            </>
          ) : (
            <>
              <SiRaspberrypi size={40} color="#C51A4A" />
              <SiArduino size={40} color="#00979D" />
              <SiC size={40} color="#000000" />
            </>
          )}
        </div>
        <h3>Tech Stack - {slideIndex === 0 ? 'Software' : 'Hardware'}</h3>
        <p>
          {slideIndex === 0
            ? 'I specialize in programming languages and modern frameworks such as C++, Java, and Python, and I leverage platforms like Supabase and Google Cloud to architect and deploy robust, scalable, and efficient applications tailored for both web and mobile environments.'
            : 'I work extensively with embedded systems and hardware platforms such as Raspberry Pi, Arduino, and the Basys3 FPGA board. My experience includes low-level programming, Verilog for digital circuit design, sensor integration, and bare-metal development for real-time robotics and interactive hardware applications.'}
        </p>
      </div>
    </section>
  );
};

export default About;