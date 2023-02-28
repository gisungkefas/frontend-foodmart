import React from 'react'
import {Card, Button, Table} from 'react-bootstrap'
import chickenimage from '../../assets/images/orderfoodcollage.jpg'
import icon from '../../assets/images/image-icon.png'
import './CancelOrder.css'
import { useNavigate } from 'react-router-dom'

const CancelOrder = () => {

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
  return (
    <div className='help-container'>
      <Card bg="light">
      <Card.Body className='help-body'>
      <div className="textbody-help">
        <img src={icon} alt="icon" className="logo-help" />
        <Card.Title>To Cancel An Order</Card.Title>
        </div>
      <Table striped bordered hover variant="grey">
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Order Items</th>
          <th>Order Date</th>
          <th>Cancel</th>
        </tr>
      </thead>
      {/* <div contentEditable="true">You Favorite Movie</div> */}
      <tbody>
        <tr>
          <td contentEditable="true">1</td>
          <td contentEditable="true">Mark</td>
          <td contentEditable="true">Otto</td>
          <td><button className="cancel-order">Cancel</button></td>
        </tr>
        <tr>
          <td contentEditable="true">2</td>
          <td contentEditable="true">Jacob</td>
          <td contentEditable="true">Thornton</td>
          <td><button className="cancel-order">Cancel</button></td>
        </tr>
        <tr>
          <td contentEditable="true">3</td>
          <td contentEditable="true">Larry the Bird</td>
          <td contentEditable="true">@twitter</td>
          <td><button className="cancel-order">Cancel</button></td>
        </tr>
      </tbody>
    </Table>
   
        <Button variant="primary" onClick={goBack}>Back</Button>
        {/* <Card.Img className='hamburgerImage' variant="bottom" src={chickenimage} /> */}
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
</Card>
    </div>
  )
}

export default CancelOrder
