import { Card, Col, Badge } from 'react-bootstrap';
import logo from '../asset/grey.jpg';

const Product = (data:any) => (
    <div style={{marginBottom:"30px"}}>
        <Col xs={12} md={6} lg={4} key={data.product._id}>
            <Card className="bg-dark text-black">
                <Card.Img src={logo} width={200} height={200} alt="Card image" loading='lazy'/>
                <Card.ImgOverlay>
                    <Card.Title style={{float:"right"}}><Badge bg={data.product.color}>{data.product.type}</Badge></Card.Title>
                    <Card.Text style={{bottom:0, position: "absolute"}}>
                    {data.product.point}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card.Text style={{marginTop:"10px", marginLeft:"5px", fontWeight:"bold"}}>{data.product.name}</Card.Text>
        </Col>
    </div>
)
export default Product;