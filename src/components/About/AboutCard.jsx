import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola a todos! Soy <span className="purple">Gonzalo Bultron </span>
            de <span className="purple"> Panamá.</span>
            <br />
            Soy un desarrollador apasionado, enfocado en el desarrollo web y de aplicaciones móviles.
            <br />
            <br />
            Además de programar, ¡hay otras actividades que me encantan!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Desarrollar Videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Crear mis propios assets para juegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Aprender nuevas tecnologías
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "¡Construye cosas que te inspiren a seguir creando!"{" "}
          </p>
          <footer className="blockquote-footer">Gonzalo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
