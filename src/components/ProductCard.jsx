import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { Zoom } from 'react-awesome-reveal';

const img = 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'

const ProductCard = ({product}) => {

    return (
        <Col sm="6" lg="4" xl="3">
            <Zoom triggerOnce>
                <Card className='m-2' >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text className=''>
                            {product.price} <br /> {product.title}
                        </Card.Text>
                        <Button variant="success" className='rounded'>Add to cart</Button>
                    </Card.Body>
                </Card>
            </Zoom>
        </Col>
    );
}

export {ProductCard};