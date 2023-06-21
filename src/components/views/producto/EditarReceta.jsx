import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { consultaReceta, consultaEditarReceta } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    consultaReceta(id).then((respuesta) => {
      if (respuesta) {
        console.log('Tengo que cargar el objeto en el formulario');
        console.log(respuesta);
        setValue('nombreReceta', respuesta.nombreReceta);
        setValue('tiempo', respuesta.tiempo);
        setValue('imagen', respuesta.imagen);
        setValue('categoria', respuesta.categoria);
      } else {
        Swal.fire('Ocurrió un error', 'No se puede editar la receta', 'error');
      }
    });
  }, [id, setValue]);

  const onSubmit = (recetaEditada) => {
    console.log(recetaEditada);
    consultaEditarReceta(recetaEditada, id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire('Producto editado', `El producto ${recetaEditada.nombreReceta} fue editado correctamente`, 'success');
        navegacion('/administrador');
      } else {
        Swal.fire('Ocurrió un error', `El producto: ${recetaEditada.nombreReceta} no fue editado`, 'error');
      }
    });
  };


  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar receta</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Plato</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Puré de papas"
            {...register("nombreReceta", {
              required: "El nombre de la receta es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad mínima de caracteres es de 2 dígitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad máxima de caracteres es de 100 dígitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTiempo">
          <Form.Label>Tiempo de preparación:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50 minutos"
            {...register("tiempo", {
              required: "El tiempo de preparación es obligatorio",
              min: {
                value: 1,
                message: "El tiempo mínimo es de 1 minuto",
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.tiempo?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>URL de la imagen*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.example.com/imagen.jpg"
            {...register("imagen", {
              required: "La URL de la imagen es obligatoria",
              pattern: {
                value: /^https?:\/\/.*\.(?:png|jpg|jpeg)$/,
                message: "La URL de la imagen no es válida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            as="select"
            {...register("categoria", { required: "La categoría es obligatoria" })}
          >
            <option value="">Selecciona una categoría</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Almuerzo">Almuerzo</option>
            <option value="Cena">Cena</option>
          </Form.Control>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Editar receta
        </Button>
      </Form>
    </section>
  );
};

export default EditarReceta;
