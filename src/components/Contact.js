import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Let's Connect</h2>
      <p>
        Whether you're curious about my work, want to collaborate, or just want to say hi — let's chat!
      </p>
      <div className="contact-buttons">
        <a
          href="https://www.linkedin.com/in/tejasakumar"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn linkedin"
        >
          💼 Connect on LinkedIn
        </a>
        <a
          href="mailto:tejasakumar@u.nus.edu"
          className="contact-btn email"
        >
          ✉️ Send me an Email
        </a>
      </div>
    </section>
  );
};

export default Contact;