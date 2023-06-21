import { Button } from 'react-bootstrap';
import error from '../../assets/Error404.png'


const Error404 = () => {
    
    return (
        <section className="mainSection text-center mt-5">
            <img src={error} alt="error 404" />
            <div>
            <Button variant='primary' href='/' >Volver al inicio</Button>

            </div>
        </section>
    );
};

export default Error404;