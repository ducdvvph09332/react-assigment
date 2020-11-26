import logo from './logo.svg';
import './App.css';
import React, { Fragment, useEffect, useState } from 'react'
import Products from './Products'
import AddProduct from './AddProduct';


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const API_PRODUCT = 'http://localhost:3000/products'
    fetch(API_PRODUCT)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  const onDeleteProduct = (id) => {
    const API_PRODUCT = `http://localhost:3000/products/${id}`;
    fetch(API_PRODUCT, { method: 'DELETE' })
      .then(response => response.json())
    const newProduct = products.filter(product => product.id !== id);
    setProducts(newProduct);
  }

  const onAddProduct = (product) => {

    const API_PRODUCT = 'http://localhost:3000/products'
    fetch(API_PRODUCT,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
      })
      .then(response => response.json())
    const newProduct = {
      id: Math.floor(Math.random() * 100),
      ...product
    }
    setProducts([
      ...products,
      newProduct
    ])
  }



  return (
    <>
      <AddProduct addProduct={onAddProduct} />
      <Products products={products} deleteProduct={onDeleteProduct} />
    </>
  );
}

export default App;
