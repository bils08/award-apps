import 'bootstrap/dist/css/bootstrap.min.css';  
import { Button, Container, Offcanvas, Nav, Navbar, Form } from 'react-bootstrap';  
import {useState} from 'react'  
import logo from '../asset/star-images.png';
import { MdSort } from "react-icons/md";
import { CgSortAz } from "react-icons/cg";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function App() {   
  const [show, setShow] = useState(false);  
  const [showFilter, setShowFilter] = useState(false);  
  const closeSidebar = () => setShow(false);  
  const showSidebar = () => setShow(true);  
  const closeSidebarFilter = () => setShowFilter(false);  
  const showSidebarFilter = () => setShowFilter(true);  

  return (  
    <div className='container-fluid'>  
    <Container className='p-4'>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
            <Container>
                <Button variant="link" onClick={showSidebar}>  
                    <MdSort size={28}/>
                </Button> 
            </Container>
            <Container style={{margin:"auto"}}>
                <Navbar.Brand>AWARD</Navbar.Brand>
            </Container>
            <Container>
                <Nav>
                    <Button variant="link" onClick={showSidebarFilter}>  
                        <CgSortAz size={42}/>
                    </Button>  
                </Nav>
            </Container>  
      </Navbar> 
      <Offcanvas show={show} onHide={closeSidebar}>  
        <Offcanvas.Header style={{marginTop:"100px", marginLeft:"30px"}}>  
          <Offcanvas.Title>
            <img src={logo} width={"100"} height={"100"} alt="logo" />
          </Offcanvas.Title> 
        </Offcanvas.Header>  
        <Offcanvas.Body style={{ marginLeft:"30px"}}> 
          <h1>Awards Menu</h1>
          <Nav defaultActiveKey="/home" className="flex-column" style={{color:"black"}}>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link eventKey="link-1">Cards</Nav.Link>
            <Nav.Link eventKey="link-2">Profile</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav> 
        </Offcanvas.Body>  
      </Offcanvas>


      <Offcanvas show={showFilter} onHide={closeSidebarFilter}>  
        <Offcanvas.Header closeButton>  
          <Offcanvas.Title>
            <h3>Filter</h3>
          </Offcanvas.Title> 
        </Offcanvas.Header>  
        <Offcanvas.Body> 
          <h5>Poin Needed</h5>
          <div style={{display: "inline-block"}}>
            <h4 style={{float:"left"}}>IDR 10.000</h4>
            <h4 style={{float:"right", marginLeft:"120px"}}>IDR 500.000</h4>
          </div>
          <Slider 
             min={10000}
             max={500000}
          />
          <h5>Awards Type</h5>
          <Form>
            <Form.Check 
                type="checkbox"
                id="al"
                label="All Type"
            />
            <Form.Check 
                type="checkbox"
                id="vc"
                label="Vouchers"
            />
            <Form.Check 
                type="checkbox"
                id="pd"
                label="Products"
            />
            <Form.Check 
                type="checkbox"
                id="ot"
                label="Others"
            />
          </Form>
        </Offcanvas.Body>  
        <Button as="input" type="button" value="Filter" variant="primary" 
        style={{ width: 350, margin:'auto', marginBottom:"20px" }} />
      </Offcanvas>    
      </Container>  
    </div>  
  );  
}  
export default App;  