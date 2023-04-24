import React from 'react'
import './index.scss'
import cart_button from "../../assets/cart_button.png"
import xbox from '../../assets/IMG01.png'
import Modal from '../../components/ModalCart/modalCart'

const ProductDetail = ({ data }) => {
    const[OpenModal, setOpenModal] = useState(false)
    console.log(data);

  return (
    <div className='product-detail'>
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
    <Modal isOpen={OpenModal}setModalOpen={() => setOpenModal(!OpenModal)}>
    <img className ="xbox" src={xbox} alt="Xbox"/>
    <h2 className="cart">Meu Carrinho</h2>
    <p className="p">Microsoft Xbox Series X | Preto</p>
    <hr className="line"></hr>
    <p className="price">R$ 4.799,00</p>
    <p className="cor">Cor: Preto</p>
    <div className="color"></div>
    <button className="continuar">Continuar Comprando</button>
    <button className="finalizar">Finalizar</button>
    </Modal>
            <div>
                <button>
                    <img src={cart_button}/>
                    Adicionar ao carrinho
                </button>
            </div>
        </div>

    </div>
  )
}

export default ProductDetail;