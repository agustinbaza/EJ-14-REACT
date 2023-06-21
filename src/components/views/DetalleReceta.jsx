import { Container, Card, Row, Col } from "react-bootstrap";

const DetalleReceta = () => {
  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://t1.uc.ltmcdn.com/es/posts/1/5/0/como_hacer_pure_de_papas_36051_orig.jpg"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>
                {" "}
                <h1> Pure de papas </h1>{" "}
              </Card.Title>
              <hr />
              <Card.Text>
                Receta para pure de papas super cremoso con un toque de finas
                hierbas.
                <br />
                <br />
                <span className="text-danger fw-semibold ">
                  Categoria:
                </span>{" "}
                Guarnicion
                <br />
                <br />
                <span className="text-danger fw-semibold ">Tiempo:</span> 25min
              </Card.Text>
              <br />
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
