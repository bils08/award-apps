import axios from 'axios';
import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../asset/star-images.png';

// data dummy untuk tes login
const users = "someone@ymail.com";

export default class Login extends Component<{}, {email:string, isUser:Boolean}> {
    constructor(props:any) {
        super(props);
        this.state = {
            email : "",
            isUser: false
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    async componentDidMount() {
        await axios.get("")
            .then(response => {
               
                })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeEmail(e:any) {
        this.setState({email: e.target.value});
    }

    onClick(e:any) {

        const payload = {
            email: this.state.email,
        }

        // berikut untuk login dengan data hardcode
        if (payload.email.match(users)) {
            window.location.href = '/home';
        } else {
            alert("Email Address is not exists");
        }
        
        // berikut untuk login dengan data localhost backend server
        // login dengan input "someone@ymail.com"
        // axios.get("http://localhost:5000/user/" + payload.email )
        //     .then(res => {
        //         if(res.data.email !== null ) window.location.href = '/home';
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    }
    
    render() {
        return (
            <div className="container-fluid" style={{marginTop: 70}}> 
                <div style={{ width: 350, margin: 'auto' }}>
                    <Form.Label>
                        <img src={logo} alt="star-logo" style={{ marginLeft: 10 }} 
                        width={"300"} height={"300"} />
                    </Form.Label>
                    <Form.Label style={{ marginLeft: 90 }}><h1>AWARD</h1></Form.Label>
                    <br />
                    <Form.Text id="emailNotes" >
                        <h5>Enter your email address to sign in and continue</h5>
                    </Form.Text>
                    <br />
                    <Form.Control
                        value={this.state.email}
                        placeholder='Email Address'
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <br />
                    <Button as="input" type="button" value="Sign In" variant="dark" 
                    onClick={this.onClick} style={{ marginLeft: 130 }} />
                </div>
            </div>
        );
    }
}
