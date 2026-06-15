import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import ProfilePic from "../../assets/elvin_pic.png";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={ProfilePic} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I’m a Full Stack Developer with 4+ years of experience building
                scalable web applications using technologies like React.js,
                Next.js, Node.js, and TypeScript. I specialize in creating
                efficient, user-friendly solutions across both frontend and
                backend. My work focuses on performance, clean code, and
                maintainability. I have experience delivering end-to-end
                projects in agile environments. I enjoy solving complex problems
                and continuously upgrading my skills. I’m open to new
                opportunities, collaborations, and meaningful tech discussions.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
