import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import DocImage from "../../assets/doc_image.png";
import ChatImage from "../../assets/chat_image.png";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Developed a full-stack Doctor Appointment System using the MERN stack,
          enabling seamless booking, authentication, and real-time availability
          management. Built a real-time Chat Application with secure user
          authentication and instant messaging using WebSockets and modern React
          architecture. Implemented RESTful APIs, state management, and
          responsive UI to ensure scalable and user-friendly experiences across
          both projects. Focused on performance optimization, clean code
          practices, and deploying production-ready applications with modern
          development tools.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img src={DocImage} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Doctor Appointment System
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/elvinraj/Doctor-Appointment-System-MERN-Stack.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Web & Mobile App</span>
                  <img src={ChatImage} alt="project2" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">MERN Stack</span>

                  <span className="card-detail-badge">Nodemailer</span>
                  <span className="card-detail-badge">Send Grid</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Chat App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/elvinraj/FullStack-Chat-app.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">NoSQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Techinfoyt Job Portal</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div> */}
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
