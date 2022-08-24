import axios from 'axios';
import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './product';
import Navbar from './navbar';

// data dummy untuk tes cards
// export const datas = [
//     {
//       _id: 1,
//       name: "Gift Card IDR 1.000.000",
//       type: "Vouchers",
//       point: "500.000 Poin",
//       color: "primary"
//     },
//     {
//         _id: 2,
//       name: "Gift Card IDR 500.000",
//       type: "Products",
//       point: "250.000 Poin",
//       color: "success"
//     },
//     {
//         _id: 3,
//       name: "Old Fashion Cake",
//       type: "Giftcards",
//       point: "100.000 Poin",
//       color: "danger"
//     },
//     {
//         _id: 4,
//        name: "Gift Card IDR 500.000",
//        type: "Products",
//        point: "250.000 Poin",
//        color: "primary"
//     },
//     {
//         _id: 5,
//        name: "Old Fashion Cake",
//        type: "Giftcards",
//        point: "100.000 Poin",
//        color: "success"
//     },
//     {
//         _id: 6,
//        name: "Gift Card IDR 500.000",
//        type: "Products",
//        point: "250.000 Poin",
//        color: "danger"
//     },
//     {
//         _id: 7,
//        name: "Old Fashion Cake",
//        type: "Giftcards",
//        point: "100.000 Poin",
//        color: "primary"
//     },
//     {
//         _id: 8,
//        name: "Gift Card IDR 500.000",
//        type: "Products",
//        point: "250.000 Poin",
//        color: "success"
//     },
//     {
//         _id: 9,
//        name: "Old Fashion Cake",
//        type: "Giftcards",
//        point: "100.000 Poin",
//        color: "danger"
//     },
//     {
//         _id: 10,
//        name: "Old Fashion Cake",
//        type: "Giftcards",
//        point: "100.000 Poin",
//        color: "primary"
//     }
// ]

export default class Home extends Component<{}, {content:any}> {
    constructor(props:any) {
        super(props);
        this.state = {
            content: [],
        }
    }

    // berikut fungsi untuk memanggil server backend localhost untuk daftar data awards
    async componentDidMount() {
        await axios.get("http://localhost:5000/award")
            .then(response => {
                this.setState({content: response.data});
                console.log(response.data);    
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const datas = this.state.content;
        return (
            <div className="container-fluid"> 
                <Navbar />
                <div style={{ margin: "auto", marginLeft:"400px"}}>
                    <Row style={{overflow: "visible" }}>
                        {datas.map((product:any) => (
                            datas.length > 0
                             ? <Product key={product._id} product={product} />
                             : <h1>No Awards Found</h1>
                        ))}  
                    </Row>
                </div>
            </div>
        );
    }
}
