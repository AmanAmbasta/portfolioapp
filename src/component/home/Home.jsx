import "./home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    let profilePicUrl = process.env.REACT_APP_PROFILE_IMAGE_URL;
    profilePicUrl = !!profilePicUrl
      ? `url(${profilePicUrl})`
      : "url(../../assets/me.jpeg)";
    let profilePic = document.querySelector(".profile-pic");
    profilePic.style.setProperty("--profile-url", profilePicUrl);
  });

  return (
    <div className="home flex">
      <div className="profile-card">
        <div className="profile-pic" />
        <div id="intro">
          <h1> Kumar Aman</h1>
          <p>
            {" "}
            I am <span>Web Developer</span>
          </p>
        </div>
      </div>
      <ul className="nav-links">
        {/*  <li>
          <Link to="/about">
            <div>About Me</div>
          </Link>
        </li> */}
        <li>
          <Link to="/project">
            <div>Project</div>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <div>Get in Touch</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
