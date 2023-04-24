import React from 'react';
import './index.scss';

const ModalCart = ({ onClose }) => {
  const handleContinueShopping = () => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>
          &times;
        </span>

        <h1 className="h1end">Finalizar Compra:</h1>
        <label htmlFor="nome">Digite seu nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Nome completo"/>

        <label htmlFor="cpf">Digite seu CPF:</label>
        <input type="text" id="cpf" name="cpf" placeholder="xxx.xxx.xxx-xx"/>

        <label htmlFor="endereço">Endereço:</label>
        <input type="text" id="endereço" name="endereço" placeholder="Endereço completo"/>

        <label htmlFor="pagamento">Forma de Pagamento:</label>
        <input type="text" id="pagamento" name="pagamento" placeholder=""/>

        <button className="btnEnd" onClick={handleContinueShopping}>Confirmar Pedido</button>
      </div>
    </div>
  );
};

export default ModalCart;