import { Col, Card, Button } from "react-bootstrap";

const CardReceta = () => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://t1.uc.ltmcdn.com/es/posts/1/5/0/como_hacer_pure_de_papas_36051_orig.jpg"
        />
        <Card.Body>
          <Card.Title> Pure de papas </Card.Title>
          <Card.Text>TIEMPO DE PREPARACION: 25min.</Card.Text>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
