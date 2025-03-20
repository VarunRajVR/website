import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CertificationCard } from "./CertificationCard";
import certImg1 from "../assets/img/cert-img1.webp";
import certImg2 from "../assets/img/cert-img2.jpg";
import certImg3 from "../assets/img/cert-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certifications = () => {

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      description: "Cloud Certification",
      imgUrl: certImg1,
      url: "https://www.credly.com/badges/053bc9b0-6a39-49ce-9360-06251e980cf1/linked_in_profile", // Add the URL for this certification
    },
    {
      title: "AWS Certified Developer",
      description: "Cloud Certification",
      imgUrl: certImg2,
      url: "https://www.credly.com/badges/053bc9b0-6a39-49ce-9360-06251e980cf1/linked_in_profile, "
    },
    {
      title: "Microsoft Technology Associate",
      description: "Security Certification",
      imgUrl: certImg3,
      url: "https://www.credly.com/badges/ae5a56be-3e87-4512-8ac3-c84ffbf87a8d?source=linked_in_profile", // Add the URL for this certification
    },
  ];

  return (
    <section className="certification" id="certifications">
  <Container>
    <Row>
      <Col size={12}>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2>Certifications</h2>
              <p>Here are some of the certifications I have earned in various fields of expertise.</p>
              <Tab.Container id="certifications-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Licenses</Nav.Link>
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
                      {certifications.map((certification, index) => (
                        <CertificationCard key={index} {...certification} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey="second">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </Tab.Pane> */}
                </Tab.Content>
              </Tab.Container>
            </div>
          }
        </TrackVisibility>
      </Col>
    </Row>
  </Container>
  <img className="background-image-right" src={colorSharp2} alt="Background" />
</section>
  )
}