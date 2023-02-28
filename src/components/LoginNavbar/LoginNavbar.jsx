import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Form } from 'react-bootstrap'
import { GrCart } from 'react-icons/gr'
import Hello from '../HelloNavbarComp/Hello';
import icon from '../../assets/images/Foodmart_Logo.png'
import { Link, useNavigate } from "react-router-dom"
import './LoginNavbar.css'
import { useState, useEffect } from 'react';


const LoginNavbar = () => {
  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/api/v1/search', {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const json = await response.json();
      console.log(json);
      setData(json);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedData = filteredData.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  );

  const handlelogout = (e)=>{
    e.preventDefault()
    localStorage.clear();
    // localStorage.removeItem("token")
    navigate("/")
  }



  return (
    <Navbar bg="light" expand="lg">
      <div className='logo'>
        <Navbar.Brand href="#home">
          <img src={icon} alt="Logo" className='logoimageloginnav' />
        </Navbar.Brand>
        <h3 className='hlogo'>FoodMart</h3>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
            <input
              type="search"
              placeholder="Search"
              className="searchbar"
              aria-label="Search"
              // value={searchTerm}
              onClick={() => handleChange}


            />
            <button className='btnsearch' onClick={() => handleChange} variant="outline-success">Search</button>
          </Form>
          <Nav className="me-auto " >
            <div className='right-side-navbar'>
              <li> <Nav.Link className='right-side-nav-content1'> <Link to={"/"}> Home</Link> </Nav.Link></li>
              {/* <li> <Nav.Link href="#link" className='right-side-nav-content2'>Link</Nav.Link></li> */}
              <li> <NavDropdown title={<Hello />} id="basic-nav-dropdown" className='right-side-nav-content3'>
                <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Orders
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Favourite/Saved Items</NavDropdown.Item>
                
              </NavDropdown>
              </li>
              <li> <NavDropdown title="Help" id="basic-nav-dropdown" className='right-side-nav-content3'>
                <NavDropdown.Item href="/help">Help Center</NavDropdown.Item>
                <NavDropdown.Item href="/orderhelp">
                  How to place an order
                </NavDropdown.Item>
                <NavDropdown.Item href="/cancelorder">Cancel order</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              </li>
                
              <li className='cart-navbar-mycart'><Link to="/cart"><GrCart /></Link></li><span className='cartsuperscript' id="lblCartCount">3</span>
              <Button onClick={handlelogout} variant="outline-success" style={{width:"max-content"}}>Logout</Button>
              
            </div>

          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>


  )
}

export default LoginNavbar
