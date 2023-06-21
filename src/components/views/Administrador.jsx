import { Table } from "react-bootstrap";
import ItemReceta from "./producto/ItemReceta";
import { useEffect, useState } from "react";
import { consultaListaRecetas } from "../helpers/queries";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    consultaListaRecetas().then((respuesta) => {
      setRecetas(respuesta);
    });
  }, []);

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Recetas disponibles</h1>
        <Link className="btn btn-primary" to="/administrador/crear-receta">
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Receta</th>
            <th>Tiempo (minutos)</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {recetas.map((receta) => (
            <ItemReceta
              key={receta.id}
              recetas={receta}
              setRecetas={setRecetas}
            ></ItemReceta>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
