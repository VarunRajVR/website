import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Notes Keeper App",
      description: "React Website",
      imgUrl: projImg1,
      url: "https://github.com/VarunRajVR/keeper-app?tab=readme-ov-file", // Add the URL for this project
    },
    {
      title: "E-Commerce Website",
      description: "Blockchain based Auctioning Website",
      imgUrl: projImg2,
      url: "https://github.com/VarunRajVR/Antique-Auctioneer", // Add the URL for this project
    },
    {
      title: "LazyScorer",
      description: "Automatic Handwritten exam grader",
      imgUrl: projImg3,
      url: "https://github.com/VarunRajVR/LazyScore", // Add the URL for this project
    },
    {
      title: "Flood Damage Analysis",
      description: "Using GANS model",
      imgUrl: projImg4,
      url: "https://github.com/VarunRajVR/Flood-Damage/blob/main/Flood_damage.ipynb", // Add the URL for this project
    },
    {
      title: "Mobile Price Prediction",
      description: "Using Machine Learning",
      imgUrl: projImg5,
      url: "https://github.com/VarunRajVR/Mobile-Price-Prediction", // Add the URL for this project
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>

Here are some of the impactful projects I’ve worked on, showcasing my expertise in AI/ML, cloud computing, and full-stack development. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
