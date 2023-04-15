import './index.scss'
import cart_button from "../../assets/cart_button.png"
import ModalForm from '../ModalForm/modalForm'
import { React, useState } from 'react'

const ProductDetail = ({ data }) => {
    console.log(data);

    const [showModal, setShowModal] = useState(false);

    const handleAddToCart = () => {
        setShowModal(true);
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const productDetailClass = `product-detail ${showModal ? 'product-detail--modal-active' : ''}`;

  return (
    <div className={productDetailClass}>

        {showModal && <ModalForm onClose={handleCloseModal} data={data} />}

        <div className='product-detail__left-side'>
            <div className='product-detail__card'>
                <img src={data.img} alt={data.descrição}/>
                <p>{data.nome}</p>
            </div>
            <div className='product-detail__description'>
                <h1>Descrição</h1>
                <p>{data.descrição}</p>
            </div>
        </div>
        <div className='product-detail__right-side'>
            <h1>{data.nome}</h1>
            <h3>{data.preço}</h3>
            <h4>Cor: {data.cor}</h4>
            <div className='product-detail__cube-colors'>
                {data.cor.map((cor) => (
                    <div
                    style={{
                        width: "40px",
                        height: "40px",
                        border: "solid 1px black",
                        borderRadius: "10px",
                        backgroundColor: cor,
                    }}
                    ></div>
                ))}
            </div>
            <div>
                <button onClick={handleAddToCart}>
                   <img src={cart_button} alt="cart button"/>
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    </div>
    )
}

export default ProductDetail;