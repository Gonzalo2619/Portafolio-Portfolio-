import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
// ¡IMPORTANTE! Asegúrate de que tu PDF esté en la carpeta Assets.
import pdf from "../../Assets/CV_Gonzalo_Bultron.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Descargar CV
          </Button>
        </Row>

        {/* Usamos un iframe para mostrar el PDF de forma nativa en el navegador */}
        <Row className="resume">
          <iframe
            src={pdf}
            title="Currículum"
            style={{
              width: "75vw", // Ocupa el 70% del ancho de la pantalla
              height: "128vh", // Ocupa el 80% de la altura de la pantalla
              border: "none",
              margin: "20px auto", // Centra el iframe
              display: "block",
            }}
          >
            Tu navegador no soporta PDFs. Por favor, descárgalo para verlo.
          </iframe>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Descargar CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

