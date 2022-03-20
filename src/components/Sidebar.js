import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Sidebar = ({
  sortPrice,
  setSortPrice,
  category,
  setCategory,
  brand,
  setBrand,
  size,
  setSize,
}) => {

  const handleClearFilters = () => {
    setSortPrice('Low to High');
    setCategory('All');
    setBrand('All');
    setSize('All');
  };
  return (
    <div>
      <Container className='m-2 shadow p-3 mb-5 bg-white rounded'>
        <Row>
          <Col>
            <h3>Filters</h3>
          </Col>
          <Col>
            <Button variant='outline-dark' onClick={handleClearFilters} style={{ fontWeight: 'bold', float: 'right' }}>Clear Filters</Button>
          </Col>
        </Row>
        <Row>
          <Col><p className='border-bottom rounded m-2 p-1'>Sort by </p>

            <Form.Control
              as="select"
              style={{ width: '75%', margin: 'auto', border: 'none' }}
              value={sortPrice}
              onChange={(e) => setSortPrice(e.target.value)}
            >
              <option value="Low to High">Low to High</option>
              <option value="Hight to Low">High to Low</option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col><p className='border-bottom rounded m-2 p-1'>Ideal for </p>

            <Form.Control
              as="select"
              style={{ width: '75%', margin: 'auto', border: 'none' }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col><p className='border-bottom rounded m-2 p-1'>Brand </p>

            <Form.Control
              as="select"
              style={{ width: '75%', margin: 'auto',border:'none' }}
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
                <option value="All">All</option>
                <option value="Flying Machine">Flying Machine</option>
                <option value="Van Heusen">Van Heusen</option>
                <option value="WildCraft">WildCraft</option>
                <option value="London Hills">London Hills</option>
                <option value="Jaffrey">Jaffrey</option>
                <option value="Sara">Sara</option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col><p className='border-bottom rounded m-2 p-1'>Size </p>

            <Form.Control
              as="select"
              style={{ width: '75%', margin: 'auto', border: 'none' }}
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="All">All</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </Form.Control>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Sidebar