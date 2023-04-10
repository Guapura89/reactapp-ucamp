import { Button, Container, Carousel } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import '../App.css'

const Home = () => {
    return (
        <div className='bg-primary vh-100'>
            <Container fluid>
                <div className='p-5 text-center text-white'>
                    <h1 className='fw-bold'>Bienvenido a <Fade duration={200} cascade>U_Store</Fade></h1>
                    <p>En U_Store encontrarás todo lo que necesitas para tu hogar</p>
                    <Link to={'/products'}><Button variant='outline-light'>Ver Productos</Button></Link>
                </div>
                <Carousel className='carousel-home w-50 mx-auto'>
                    <Carousel.Item className='h-100'>
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/2811648/pexels-photo-2811648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Escritorios para oficina</h3>
                        <p>Escritorios de diferentes materiales de calidad.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='h-100'>
                        <img
                        className="d-block w-100 h-100"
                        src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Decoraciones</h3>
                        <p>Todo tipo de decoraciones para dormitorio.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='h-100'>
                        <img
                        className="d-block w-100 h-100"
                        src="https://images.unsplash.com/photo-1630514850000-c26a70023c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Plantas decorativas</h3>
                        <p>
                            Gran variedad de plantas para decoracion.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>

    );
}

export {Home};