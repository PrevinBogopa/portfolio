import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import image from "../../Assets/image.png"
import img from "../../Assets/img.png"
import m from "../../Assets/m.png"
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
              imgPath={bitsOfCode}
              isBlog={false}
              title="Business site"
              description="React Native Fx Business app for learning trading and investment management"
              ghLink="https://github.com/MURGGAR/TranscriptForge/"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ chatify}
              isBlog={false}
              title="Recording App"
              description="This app uses LLM API to record and summarize text then sent to email as meeting summary ,it uses AI,Python,Machine Learning"
              ghLink="https://github.com/MURGGAR/TranscriptForge/"
    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img}
              isBlog={false}
              title="Alliance company  site"
              description="Alliance Lift Business web designed for businesses to streamline operations, enhance productivity, and drive success."
              ghLink="https://github.com/PrevinBogopa/African-Alliance"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Import complience site"
              description="Exportify - Your trusted partner for seamless goods exportation across continents, ensuring compliance with regulations and streamlining international trade."
              ghLink="https://github.com/PrevinBogopa/website-full"

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={m}
              isBlog={false}
              title="CHATTY Social Media APP"
              description="A social app built with Django and Swift, featuring a fully event-driven architecture and comprehensive CRUD operations. Currently under development."
              ghLink="https://github.com/PrevinBogopa/Chatty"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="http://res.cloudinary.com/ak-124210/image/upload/v1651054260/ycxiaukfp3u504bmb8ii.png"
              isBlog={false}
              title="Google keep with firebase"
              description="Built this with Javascript,has allfeatures and backend is on Firebase"
              ghLink="https://previn-google-keep.netlify.app/"
  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://zaiocontent.s3.eu-west-2.amazonaws.com/images+of+courses/css_netflix.png"
              isBlog={false}
              title="Netflix Landing Page"
              description="Built this with HTML & CSS"
              ghLink="https://github.com/PrevinBogopa/Netflix-clone"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
