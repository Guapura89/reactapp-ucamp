import { Container, Row, Button } from "react-bootstrap";
import { ProductCard } from "../components/ProductCard";
import { useGetProducts } from "../hooks/useGetProducts";
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const API = 'https://api.escuelajs.co/api/v1/products?limit=12&offset=1';

const Products = () => {
    const productArray = useGetProducts(API);
    console.log(productArray)
    const productList = productArray.products.map((product) => 
        <ProductCard key={product.id} product={product} />
    );

    return (
        <div className="bg-info">
            <div>
                <Link to={'/'}><Button variant="outline-dark" className="m-3 fw-bold">Back</Button></Link>
            </div>
            <div className="text-center py-3">
                <h1><Fade cascade duration={200}>Products</Fade></h1>
            </div>
            <Container>
                <Row>
                    { productArray.isLoading ? <h1>Loading...</h1> : productList }
                </Row>
            </Container>
        </div>
    );
}

export {Products};