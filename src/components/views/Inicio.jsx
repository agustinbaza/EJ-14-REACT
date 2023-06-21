import { Container, Row} from "react-bootstrap";
import CardReceta from "./producto/CardReceta";



const Inicio = () => {
  return (
    <section className="mainSection">
      <Container>
      <img
        className="banner mb-4"
        src="https://thumbs.dreamstime.com/z/ingredientes-para-cocinar-libro-de-recetas-y-utensilios-cocina-banner-borde-ilustraci%C3%B3n-vectorial-elementos-vajilla-culinaria-233810583.jpg?w=992"
        alt="fondo cocina"
      />
      </Container>
      <Container>
        <h1 className="display-4">Nuestras recetas</h1>
        <hr />
      <Row>
      <CardReceta></CardReceta>
        <CardReceta></CardReceta>
        <CardReceta></CardReceta>
      </Row>
       
        
       
      </Container>
    </section>
  );
};

export default Inicio;