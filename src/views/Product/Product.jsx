import React from 'react'
import Header from "../../components/Header/header";
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/productDetail';

const Product = ({ data }) => {
    const { productid } = useParams();
    const selectedProduct = data.find((product) => product.id == productid)


  return (
    <div>
      <Header />
      <ProductDetail data={selectedProduct} />
    </div>
  )
}

export default Product