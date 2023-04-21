import { React, useState } from 'react'
import './index.scss'
import ModalCart from '../ModalCart/modalCart'

const ModalForm = ({ onClose, data }) => {
  const [showModalCart, setShowModalCart] = useState(false);
  
  const handleContinueShopping = () => {
    onClose();
  };

  const handleFinalizarCompra = () => {
    setShowModalCart(true);
  };

  const handleCloseModalCart = () => {
    setShowModalCart(false);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal__content modal__content--flex">
        <span className="modal__close" onClick={onClose}>
          &times;
        </span>

        <img className="imageModal" src={data.img} alt={data.descrição}/>
        <div className="modal__content__right">
          <h1 className="h1bold" >Meu Carrinho</h1>
          <h2>{data.nome}</h2>
          <hr />
          <h1 className="h2bold" >{data.preço}</h1>
          <h4>Cor: {data.cor}</h4>

          <div className='modal__content__colors'>
            {data.cor.map((cor) => (
            <div
              style={{
                width: "40px",
                height: "40px",
                border: "solid 1px black",
                borderRadius: "10px",
                backgroundColor: cor,
              }}>
            </div>
            ))}
            </div>

          <button onClick={handleContinueShopping}>Continuar Comprando</button>
          <button onClick={handleFinalizarCompra}>Finalizar Compra</button>

        </div>
      </div>
      {showModalCart && <ModalCart onClose={handleCloseModalCart} />}
    </div>
  );
};

export default ModalForm;