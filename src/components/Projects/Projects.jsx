import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCard2 from "./ProjectCards2";
import ProjectCards3 from "./ProjectCards3";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotions.png";
import editor from "../../Assets/Projects/3di-app.png";
import chatify from "../../Assets/Projects/medico24x7.png";
import bitsOfCode from "../../Assets/Projects/3di.png";
import arkanoid from "../../Assets/Projects/arkanoid.png";
import space_invaders from "../../Assets/Projects/space_invaders.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos</strong> Recientes
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos proyectos en los que he trabajado últimamente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={chatify}
              isBlog={false}
              title="Medico24x7"
              description="Es un sitio web de medicina. Este sitio cuenta con citas virtuales y una sección para agendar consultas presenciales si así lo desea. Está hecho con React + Vite en el frontend y PHP en el backend, utiliza una base de datos relacional MySQL e integra varias API."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://medico24x7.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard2
              imgPath={bitsOfCode}
              isBlog={false}
              title="3Di - Web"
              description="Es un sitio web donde puedes comprar o cotizar servicios de impresión 3D y desarrollo web, e incluye un carrito de compras. Está hecho con React + Vite para el frontend y PHP para el backend. Utiliza una base de datos relacional MySQL e integra diferentes API, entre ellas un chatbot de ventas con IA que usa ChatGPT."
              demoLink="https://3d-imagine.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards3
              imgPath={editor}
              isBlog={false}
              title="3Di - APP"
              description="Este proyecto tiene las mismas funciones de carrito de compra y cotizaciones de la página web, pero llevadas a una aplicación móvil. Está hecho con React Native + Expo para el frontend y comparte la misma arquitectura de PHP del sitio web para el backend, al igual que su base de datos y API."
              demoLink="https://appetize.io/app/b_wjgh2vczftkjzggnt7b5atjdua"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards3
              imgPath={emotion}
              isBlog={false}
              title="IA_FaceEmotions"
              description="Es una aplicación móvil, actualmente solo disponible para Android. Se trata de una app de reconocimiento de emociones que, básicamente, analiza rostros e identifica la emoción detectada. El modelo de IA lo entrené en Google Colab, usando el dataset 'CK+', y la aplicación la desarrollé con Android Studio."
              demoLink="https://appetize.io/app/b_umvd5kgmiwuepoj3uj4zggt454"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arkanoid}
              isBlog={false}
              title="Arkanoid"
              description="Recreación del videojuego Arkanoid, hecho con Unity, Visual Studio y el lenguaje C#."
              ghLink="https://github.com/Gonzalo2619/Proyecto-Arkanoid.git"
              demoLink="https://itsgonzalo.com/Games/Arkanoid/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space_invaders}
              isBlog={false}
              title="Space Invaders"
              description="Recreación del videojuego Space Invaders, hecho con Unity, Visual Studio y el lenguaje C#."
              ghLink="https://github.com/Gonzalo2619/Space-Invaders.git"
              demoLink="https://itsgonzalo.com/Games/Space_Invaders/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
