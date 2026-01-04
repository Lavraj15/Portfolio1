import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pro4 from "../../Assets/Projects/pro4.png";
import pro6 from "../../Assets/Projects/pro6.jpg";
import pro3 from "../../Assets/Projects/pro3.jpg";
import pro1 from "../../Assets/Projects/project1.png";
import pro5 from "../../Assets/Projects/pro5.jpg";
import pro2 from "../../Assets/Projects/fileshare.png";
import pro7 from "../../Assets/Projects/chat.png";
import pro8 from "../../Assets/Projects/event.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro1}
              isBlog={false}
              title="Stay Booking System"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Lavraj15/PG-flat-hostel-booking-system"
              demoLink="https://pg-flat-hostel-booking-system.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro7}
              isBlog={false}
              title="Chat App"
              description="I developed a real-time chat platform that enables instant messaging, live user updates, and persistent chat history. The system uses Socket.IO to provide scalable and efficient WebSocket-based communication, while MongoDB ensures reliable storage and retrieval of messages. Additionally, I built a responsive and interactive frontend using React.js, delivering a smooth user experience across different devices."
              ghLink="https://github.com/Lavraj15/chat-app-react-nodejs-master"
              demoLink="https://chat-app-react-nodejs-master-6.onrender.com/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro8}
              isBlog={false}
              title="Campus Event Management System"
              description="I developed a centralized College event management portal that enables event creation, student registration, and participation tracking. The system includes role-based access control for admins, organizers, and students to ensure a secure and well-defined workflow. Additionally, I designed an interactive dashboard with real-time updates, automated notifications, and streamlined tools to manage events efficiently."
              // ghLink="https://github.com/Lavraj15/chat-app-react-nodejs-master"
              demoLink="https://campus-event-management-tau.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro2}
              isBlog={false}
              title="File Sharing System (using Python and Flask)"
              ghLink="https://github.com/Lavraj15/File-sharing-site-with-Python-using-Flask-master"
              description="A secure web-based file sharing system using Python and Flask, allowing users to upload, download, and manage files over a local or hosted server."
              demoLink="https://youtu.be/m-IhJjqymrc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro3}
              isBlog={false}
              title="Amazon Clone"
              description="This is a static clone of the Amazon India homepage, built using HTML5 and CSS3. It focuses on recreating the design and layout of the original website to practice frontend development skills."
              ghLink="https://github.com/Lavraj15/Amazon-clone"
              demoLink="https://amazon-clone-swart-two.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro4}
              isBlog={false}
              title="Password generator"
              description="🔐 Password Generator App A clean, modern, and fully responsive Password Generator built using React and Tailwind CSS. Customize your password length, include numbers or special characters, and copy it with a single click."
              ghLink="https://github.com/Lavraj15/Password_generator"
              demoLink="https://password-generator-five-rust.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro5}
              isBlog={false}
              title="calculator-js"
              description="A basic web-based calculator built using HTML, CSS, and JavaScript. It performs simple arithmetic operations like: Addition (+), Subtraction (−), Multiplication (×), Division (÷) The calculator has a clean UI with clickable buttons and real-time display updates. Ideal for beginners to learn DOM manipulation and basic logic in JavaScript."
              ghLink="https://github.com/Lavraj15/Calculator-Using-HTML-CSS-and-JS"
              demoLink="https://calculator-using-html-css-and-js-amber.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro6}
              isBlog={false}
              title="Temperature Converter"
              description="A simple web app built using HTML, CSS, and JavaScript that converts temperature between Celsius, Fahrenheit, and Kelvin. Users enter a value and select units to see real-time conversion. Great for beginners to practice input handling and basic formulas in JavaScript."
              ghLink="https://github.com/Lavraj15/Temperature_converter"
              demoLink="https://temperature-converter-dusky-theta.vercel.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
