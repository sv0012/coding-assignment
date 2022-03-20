import React from 'react';
import { Button, Col, DropdownButton, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
        <Navbar className='d-flex justify-content-between' bg='primary' style={{ height: '8vh',marginBottom:'10px'}}>
          <Col lg={3}>
            <img src="/images/flipkart.png" style={{ height: '20%', width: '50%', float: 'right' }} /></Col>
            <Col style={{margin: '0 10px'}} lg={8}>
            <DropdownButton title="More" style={{ float: 'right' }}>
              </DropdownButton>
              <Button style={{ float: 'right' }}>Login</Button>
            </Col>



        </Navbar>
      </div>
  )
}

export default Header