import React from 'react'
import HeaderSearch from "../../components/HeaderSearch/headerSearch";
import Footer from '../../components/Footer/footer'
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/productDetail';

const Product = ({ data }) => {
    const { productid } = useParams();
    const selectedProduct = data.find((product) => product.id == productid)


  return (
    <div>
      <HeaderSearch />
      <ProductDetail data={selectedProduct} />
      <Footer />
    </div>
  )
}

export default Product