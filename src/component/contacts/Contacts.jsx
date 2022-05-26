import { Link } from "react-router-dom";
import "./contacts.css";
function Contacts() {
  return (
    <div className="contact-wrapper center-conatiner">
      <Link to="/" className="top-link">KumarAman/</Link>
      <div className="heading-main">Get in touch</div>
      <div className="contacts">
        <p className="lines">
          Mail me at <a href="mailto:aman0353@gmail.com">aman0353@gmail.com</a>
        </p>
        <p className="lines">
          <a href="https://github.com/AmanAmbasta" target="_blank" rel="noreferrer">
            Github
          </a>
          <a href="https://www.linkedin.com/in/kumar-aman-036141103/" target="_blank" rel="noreferrer">
          Linkedin
          </a>
          <a href="https://twitter.com/aman0353" target="_blank" rel="noreferrer">
            Twiter
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contacts;
