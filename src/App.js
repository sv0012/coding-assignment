

import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/Sidebar';


function App() {
  const [sortPrice, setSortPrice] = useState('Low to High');
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [size, setSize] = useState('All');
  return (
    <div className="App">
      <Header />
      <Row>
        <Col lg={3}>
        <Sidebar 
           sortPrice={sortPrice}
           setSortPrice={setSortPrice}
           category={category}
           setCategory={setCategory}
           brand={brand}
           setBrand={setBrand}
           size={size}
           setSize={setSize}
        />
        </Col>
        <Col lg={9}>
        <Home
         sortPrice={sortPrice}
         category={category}
         brand={brand}
         size={size} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
