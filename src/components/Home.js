import React from 'react';
import { Row } from 'react-bootstrap';
import data from '../data/data.json'
import Product from './Product';

const Home = ({ sortPrice, category, brand, size }) => {
    const products = data;
    let items = [...products];
    console.log(products)

  items.sort((a, b) =>
    sortPrice === 'Low to High'
      ? a.price > b.price
        ? 1
        : -1
      : a.price < b.price
      ? 1
      : -1
  );
  let filterByCategory = [...items];
  if (category !== 'All') {
    filterByCategory = items.filter((prod) => prod.category === category);
   
  }

  let filterByBrand = [...filterByCategory];
  if (brand !== 'All') {
    filterByBrand = filterByCategory.filter((prod) => prod.brand === brand);
    
  }

  let filterBySize = [...filterByBrand];
  if (size !== 'All') {
    filterBySize = filterByBrand.filter((prod) =>
    prod.size.includes(size) ? prod : ''
    );
  }

  items = [...filterBySize];
  return (
    <div>
      <Row>
        <Product items={items} /> 
      </Row>
    </div>
  )
}

export default Home