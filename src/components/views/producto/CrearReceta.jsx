import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { consultaAgregarReceta } from "../../helpers/queries";
import Swal from "sweetalert2";

const CrearReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (recetaNueva) => {
    consultaAgregarReceta(recetaNueva).then((respuestaCreated) => {
      console.log(respuestaCreated);
      if (respuestaCreated && respuestaCreated.status === 201) {
        Swal.fire('Receta creada', `La receta ${recetaNueva.nombreReceta} fue creada correctamente`, 'success');
      } else {
        Swal.fire('Ocurrió un error', `La receta: ${recetaNueva.nombreReceta} no fue creada`, 'error');
      }
    });
  };


  
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva receta</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Plato</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Pure de papas"
            {...register("nombreReceta", {
              required: "El nombre de la receta es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Tiempo de preparacion:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50 minutos"
            {...register("tiempo", {
              required: "El tiempo de preparacion es obligatorio",
              min: {
                value: 1,
                message: "El tiempo minimo es de 1 min",
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.tiempo?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="entrada">Entrada</option>
            <option value="plato principal">Plato principal</option>
            <option value="guarnicion">Guarnicion</option>
            <option value="postre">Postre</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
            
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearReceta;
