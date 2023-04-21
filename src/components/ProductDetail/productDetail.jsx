// Acrescimo da função useState do pacote react.
import { React, useState } from 'react'
// Essa linha de codigo importa o component modalForm
import ModalForm from '../ModalForm/modalForm'
import './index.scss'
import cart_button from "../../assets/cart_button.png"

const ProductDetail = ({ data }) => {
    console.log(data);

    // Definindo o estado "showModal" com o valor inicial false.
    const [showModal, setShowModal] = useState(false);

    // Função chamada quando um evento "Adicionar ao carrinho" é acionado.
    const handleAddToCart = () => {
    // Atualiza o estado "showModal" para true.
        setShowModal(true);
    };

    // Função chamada quando um evento "Fechar" é acionado dentro do modal.
    const handleCloseModal = () => {
    // Atualiza o estado "showModal" para false.
        setShowModal(false);
    };

    // Essa linha de codigo muda a className da div product-detail quando o modal estiver ativo, isso é necessário para que a estilização do fundo do modal fique igual ao figma.
    const productDetailClass = `product-detail ${showModal ? 'product-detail--modal-active' : ''}`;

return (
    <div className={productDetailClass}>

        {/*Acrescimo de codigo para renderizar o ModalForm que recebe as props onClose e data, que é uma função de callback.*/}
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
                {/*Adição de evento de clique ao botão  para chamar a função handleAddToCart pra chamar o modal*/}
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