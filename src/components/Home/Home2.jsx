import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UN POCO <span className="purple"> SOBRE MÍ </span>
            </h1>
            <p className="home-about-body">
              Mi pasión por la programación comenzó a los 12 años, edad a la que
              empecé a crear aplicaciones sencillas como calculadoras y juegos
              en 2D.
              <br />
              <br />
              He adquirido experiencia en una variedad de lenguajes, incluyendo
              <i>
                <b className="purple">
                  {" "}
                  PHP, JavaScript, Python, C#, C, C++, Java y Kotlin.{" "}
                </b>
              </i>
              <br />
              <br />
              A nivel profesional, mis áreas de interés se centran en el
              <i>
                <b className="purple"> desarrollo de páginas web </b>
              </i>{" "}
              y{" "}
              <i>
                <b className="purple">aplicaciones móviles (Apps)</b>
              </i>
              .
              También disfruto mucho creando{" "}
              <b className="purple">videojuegos</b>, aunque lo considero
              principalmente un pasatiempo. 
              <br />
              <br />
              Entre las herramientas que uso están{" "}
              <b className="purple">React, React Native, Expo, Vite, Node.js,
                Laravel, Visual Studio Code, Android Studio, Unity</b> y{" "}
              <b className="purple">Aseprite</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{borderRadius: "100px"}}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              No dudes en <span className="purple">conectar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Gonzalo2619"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gonzalo-bultr%C3%B3n-93389130b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gonzalo_2.6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;