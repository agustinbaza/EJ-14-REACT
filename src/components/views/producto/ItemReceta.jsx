import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { consultaBorrarReceta, consultaListaRecetas } from "../../helpers/queries";
import { Link } from "react-router-dom";

const ItemReceta = ({ recetas, setRecetas }) => {
  const borrarReceta = () => {
    Swal.fire({
      title: `¿Está seguro de borrar la receta ${recetas.nombreReceta}?`,
      text: "Esta acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Borrar la receta desde la API
        consultaBorrarReceta(recetas.id).then((respuesta) => {
          console.log(respuesta);
          if (respuesta.status === 200) {
            Swal.fire(
              'Receta eliminada',
              `La receta ${recetas.nombreReceta} fue eliminada correctamente`,
              'success'
            );
            // Actualizar la lista de recetas
            consultaListaRecetas().then((respuesta) => setRecetas(respuesta));
          } else {
            Swal.fire(
              'Ocurrió un error',
              'Intente realizar esta operación nuevamente más tarde',
              'error'
            );
          }
        });
      }
    });
  };

  return (
    <tr>
      <td >{recetas.id}</td>
      <td>{recetas.nombreReceta}</td>
      <td>{recetas.tiempo} minutos</td>
      <td style={{ maxWidth: "8rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {recetas.imagen}
      </td>
      <td>{recetas.categoria}</td>
      <td  className="d-flex justify-content-around">
        <Link className="btn btn-warning" to={`/administrador/editar-receta/${recetas.id}`}>
          Editar
        </Link>
        <Button variant="danger" onClick={borrarReceta}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
