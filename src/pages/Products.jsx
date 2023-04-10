import { Container, Row, Col } from "react-bootstrap";
import { ProductCard } from "../components/ProductCard";
import { useGetProducts } from "../hooks/useGetProducts";
import { Fade, Zoom } from 'react-awesome-reveal';

const API = 'https://api.escuelajs.co/api/v1/products?limit=12&offset=1';

const Products = () => {
    const productArray = useGetProducts(API);
    console.log(productArray)
    const productList = productArray.products.map((product) => 
        <ProductCard key={product.id} product={product} />
    );

    return (
        <div className="bg-info">
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