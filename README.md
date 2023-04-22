# PROJETO DNC STORE

## ⚠️Identificação do Problema <br>



### Qual o contexto do projeto?
A empresa DNC Store está com um baixo alcance no seu percentual de vendas em sua loja presencial. O e-commerce é uma ótima oportunidade de aumentar a lucratividade da empresa, pois oferece uma experiência de compra conveniente, rápida e segura, o que os torna uma escolha popular para muitos consumidores.
A DNC Store decidiu apostar nessa plataforma para atingir as
seguintes métricas de negócio:

1. Aumentar o percentual de vendas da empresa em 40%.
2. Aumentar o nível de satisfação do cliente com a experiência de compra em uma plataforma digital.

A empresa realizou uma análise dos dados financeiros para identificar possíveis problemas, e com isso, analisando seu fluxo de caixa, lucro e perda constataram que sua estimativa de venda está abaixo do planejado para alcançar o objetivo de seu faturamento anual




## 💡 Idealização, pesquisa e prototipagem<br>
### Qual a ideia do projeto?

Resolver o problema de estimativa de venda que está abaixo do planejado da empresa DNC STORE e alcançar o objetivo de seu faturamento anual. Para isso iremos criar  uma plataforma de E-COMMERCE facilitando a experiência de compra do usuário para que seja rápida e segura.

### Qual problema de métrica de negócio resolve e quais as necessidades dos clientes?

Para atingirmos o objetivo da nossa métrica de negócio, é preciso primeiro compreender quais são as necessidades do usuário. Para isso, foi realizado uma pesquisa com os usuários, que obteve as seguintes informações:


1. Comunicação clara: Os usuários precisam de informações claras sobre o produto, como: preços e descrições.
2. Facilidade de uso: Plataforma simples, fácil de navegar e de encontrar os produtos.
3. Suporte ao cliente: Os usuários devem ter acesso ao suporte caso encontrem problemas ou tenham dúvidas. 

### Qual a ideia de protótipo do Figma pronto?
Entregar a base do projeto, mostrando os pontos importantes do mesmo.

## 🚧 Planejamento<br>

### Informações de metodologia!
Para que o projeto seja desenvolvido é de suma importância seu planejamento e para isso utilizamos a plataforma TRELLO (https://trello.com/b/q51UZx0X/e-commerce-dnc), onde estruturamos todos os passos do projeto e os separamos em 4 partes: BackLog, Sprint BackLog, In progress e Sprint Complete.

Basicamente os 4 passos são fases: de Inicio, Em progresso e Finalizado.<br><br>

Após realizada reunião em equipe definimos o seguinte escopo do projeto baseado na utilização do React Router:<br><br>

Componentes:

Header<br>
HeaderSearch<br> 
Cards<br> 
Footer<br> 
ProductDetail<br> 
ModalCart<br>
ModalForm

Views:<br>

Login<br> 
Home<br> 
Product 
<br>

Criar Mock:

Lista de itens<br><br>


### Plano de projeto estimado com prazos!
Cada responsável por suas atividades tinha um prazo determinado para finalizar suas tarefas em cada CARD.

### Pessoas responsáveis no time de desenvolvimento!
As pessoas responsáveis no time foram:

* Priscila
* Leandro
* Herbert
* Nathalia
* Marcelo
* Christian
* Erick


## 🚀 Desenvolvimento<br>

### Informações do ambiente de desenvolvimento:
Logo após serem definidas as atividades de cada um dos integrantes começamos a dar inicio no projeto.

O ambiente do projeto foi baseado no seguinte FIGMA: https://www.figma.com/file/sR8p251TiovX0RMWvXW0zX/Projeto-em-Grupo---DNC

### Passos para rodar o projeto

Para rodar o projeto em qualquer computador será necessário: Criar uma pasta e abrir a mesma no Visual Studio Code. Em seguida abrir o Terminal clicando em New Terminal.
Ao abrir o terminal digitar o seguinte código:
<br>
```
git clone https://github.com/pripc/E-commerce-DNC.git
```
Ainda no terminal o próximo comando deve ser executado: 
```
npm install
```
E por último o seguinte comando deve ser executado:
```
npm run dev
```
Se tudo ocorrer bem a seguinte mensagem irá aparecer:
```
VITE v4.1.4  ready in 715 ms <br>

  ➜  Local:   http://localhost:5173/<br>
  ➜  Network: use --host to expose<br>
  ➜  press h to show help<br>
```
Para acessar enfim ao E-commerce deve-se clicar no http://localhost:5173, segurando a tecla Control (Ctrl).



### Ferramentas e bibliotecas utilizadas:
Para o desenvolvimento do projeto utilizamos as seguintes ferramentas e bibliotecas:

Visual Studio Code <br>
React Router<br>
Vite<br>


### Códigos e funções 

Para o projeto foi utilizada a criação de componentes e views utilizando o REACT como fundamentação de todo os escopo.

Primeiramente baseado no figma proposto analisamos todos os possiveis componentes e views do projeto, após essa analise e planejamento esses foram os componentes: 

Header, HeaderSearch, Cards, Footer, ProductDetail, ModalCart e ModalForm.

Essas foram as seguintes Views do projeto:
Login, Home e Product.

Um arquivo muito importante para execução do projeto é o arquivo productMock.js, um conjunto de itens com informações que serão utilizadas no componente ProductDetail:

```
export const itens = [
    {
      id: 1,
      img: "../src/assets/IMG01.png",
      nome: "Microsoft Xbox Series X | Preto ",
      descrição: "Apresentamos o Xbox Series X, o console mais rápido e poderoso de todos os tempos. Jogue milhares de títulos de quatro gerações de consoles- todos os jogos têm melhor aparência e são melhor executados no Xbox Series X. No coração do Series X está a Xbox Velocity Architecture, que combina um SSD personalizado e software integrado para diminuir significativamente os tempos de carregamento dentro e fora do jogo. ",
      preço:"R$ 4.799,00",  
      cor: ["black"],
    },
      
    {
      id:2,
      img:"../src/assets/IMG02.png",
      nome: "Microsoft Xbox Series S",
      descrição: "Xbox Series S, o menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, o Xbox Series S oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital.",
      preço:"R$ 2.030,00",
      cor: ["white"],
      
    },
    
    {
      id:3,
      img:"../src/assets/IMG03.png",
      nome: "Nintendo Switch",
      descrição:"Nintendo Switch O console que lhe permite jogar os jogos que quiser, onde e como quiser. Inclui o console Nintendo Switch e a base do Nintendo Switch na cor preta, contrastando com os controles Joy-Con direito e esquerdo, um vermelho e o outro azul. Também inclui tudo o que você precisa para começar a jogar. Três modos em um só Switch.",
      preço:"R$ 2.280,00",
      cor: [],
    },
    
    {
      id: 4,
      img:"../src/assets/IMG04.png",
      nome: "God of War",
      descrição:"Esta impressionante repaginação de God of War reúne todas as características marcantes dessa famosa franquia — combate brutal, lutas épicas contra chefes e uma grandiosidade de tirar o fôlego — e as mescla a uma narrativa poderosa e emocionante que reestabelece o mundo de Kratos.",
      preço:"R$ 70,00",
      cor: [],
    },
    
    {
      id:5,
      img:"../src/assets/IMG05.png",
      nome: "Uncharted: The Nathan Drake Collection",
      descrição:"Conheça uma das séries de jogos mais veneradas de todos os tempos ao acompanhar a arriscada jornada de Nathan Drake pelo mundo, de um começo humilde a descobertas extraordinárias. Descubra um inesquecível elenco de personagens enquanto Drake coloca a vida e a amizade em risco em uma corrida contra inimigos implacáveis para revelar um tesouro inimaginável.",
      preço:"R$ 90,00",
      cor: [],
        
    },
    
    { 
      id:6,
      img:"../src/assets/IMG06.png",
      nome:"Gran Turismo Sport",
      descrição:"Gran Turismo Sport é a primeira experiência de corrida do mundo recriada do zero para trazer competições internacionais online autorizadas pelo maior órgão controlador das corridas de carros internacionais, a FIA (Federação Internacional de Automobilismo). Crie seu legado representando e competindo por seu país ou sua marca favorita em diversas classes de corridas, inclusive GT3, Protótipo, Rally e muito mais.",
      preço:"R$ 70,00",
      cor: [],
    }
      ]
```

### Explicando cada compenente e suas funções:

*Header<br>
Componente responsavel por ser o cabeçalho do site, esse componente está presente em todas as páginas do projeto.

Código usado para criação do Header:

```
import React from 'react'
import dncLogo from '../../assets/logo-dnc.png'
import './index.scss'

const header = () => {
  return (
    <div className="header">
      <img className="header__img" src={dncLogo} alt="dnc logo" />
    </div>
  )
}

export default header
```
Código utilizado para estilizar o componente Header:
```
@use "../../sass/variables.scss" as *;

.header {

    width: 100%;
    padding: 50px;
    background-color: $header-background;
  }
```

*HeaderSearch<br>
Componente responsavel por ser o cabeçalho das demais páginas, tirando a de login, esse componente possui um campo de input para fazer uma possivel pesquisa, um botão para executar o input e tambem links para direcionar para outras páginas (Novidades, Jogos, Video Games, e etc)

Código usado para criação do HeaderSearch:
```
import React from 'react'
import dncLogo from '../../assets/logo-dnc.png'
import carLogo from '../../assets/car.png'
import searchLogo from '../../assets/search.png'
import './index.scss'

const headerSearch = () => {
  return (
    <header className="header-menu">
    
    <div className="search">

      <div>
      <img src={dncLogo} alt="logo" className="header-menu__logo" />
    </div>
      <div className="search__input-container">
        <img
          src={searchLogo}
          alt="search logo"
          className="search__search-logo"
        />
        <input type="text" placeholder="O que você está procurando?" />
      </div>
         <img className='search__car-logo' src={carLogo} alt="carLogo" />
    </div>
    
    <div className='links'> 
       <ul>
      <li><span>Novidades</span></li>
      <li>Jogos</li>
      <li>Video Games</li>
      <li>Mesas Gamer</li>
      <li>Promoções</li>
      <li>Atendimento</li>
    </ul> 
    </div> 
  </header>
  )
}

export default headerSearch

```

Código utilizado para estilizar o componente HeaderSearch:
```
@use "../../sass/variables.scss" as *;

.header-menu{
    height: 260px;
    width: 100%;
    padding: 50px;
    background-color: $header-background;
    
}

.search {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__input-container {
      width: 75%;
      position: relative;
    }

    &__search-logo {
      position: absolute;
      left: 20px;
      top: 48%;
      transform: translateY(-50%);
      font-size: 18px;
      color: gray;
    }
  
    input {
      padding-left: 60px;
      height: 50px;
      width: 100%;
      border-radius: 10px;
      border: 1px solid black;
    }

    input::placeholder{
        font-size: 22px;
    }
  }

  .links{
    color: white;
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        margin-top: 30px;
        width: 80%;
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        flex-grow: 1;
        font-size: 30px;

        span{
            font-weight: bold ;
        }
      }
  }
```

*Footer <br>
Componente responsavel por ser o rodapé do site, contendo a logo e outras informações relevantes.

Código utilizado para criação do Footer:
```
import React from 'react'
import './index.scss'

const footer = () => {
  return (
    <div className='footer'>
      <img src='../src/assets/Logo_DNC.png' />
      <img src='../src/assets/INFO_DNC.png' />
    </div>
  )
}

export default footer
```

Código utilizado para estilizar o componente Footer:
```
@use "../../sass/variables.scss" as *;

.footer{
    background-color: #0C70F2;
    
    padding-left:34px;
    padding-bottom:20px;
}
```

*Cards<br>
Componente responsavel por conter imagem, descrição e botão "ver mais" dos produtos, cada produto com sua imagem e descrição, o produto quando clicado em seu botão "ver mais" é direcionado para outra página.

Código utilizado para criação do Cards:
```
import React from 'react'
import {  Link  } from 'react-router-dom'
import './index.scss'

const cards = ({data}) => {
    return (
        <div className='cards'>
            <img className='cards__img' src={data.img} alt={data.descrição}/>
            <h3 className='cards__title'>{data.nome}</h3>
            <button className='cards__button'> <Link to={`/product/${data.id}`}>Ver mais</Link></button>
        </div>
    )
}

export default cards
```

Código utilizado para estilizar o componente Cards:
```
@use "../../sass/variables.scss" as *;

.cards{
    text-align: center;
    background-color: white;
    width:330px;
    border-radius: 8px;
    margin-bottom:27px;
    margin-right:160px;
    text-align: center;

}
.cards__img{
    border-radius: 8px;
    width:330px;
}
.cards__title{
    font-weight: 400;
    font-size:16px;
    text-align: center;
}
.cards__button{
    @include button-home;
    width:200px;
    
}
.cards__button a{
    font-size: 14px;
    @include a
}
```

*ProductDetail<br>
Componente responsavel por ser a página resposta do click do botão "ver mais" do componente Cards. Contém as informações do produto e um botão chamado "Adicionar ao carrinho", que quando clicado abre um Modal com dois botões: Continuar comprando e Finalizar compra.

Código utilizado para criação do ProductDetail:
```
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
```

Código utilizado para estilizar o componente ProductDetail:
```
@use "../../sass/variables.scss" as *;

.product-detail {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 40% 60%;
    height: 854px;
    padding-top: 131px;

    &__left-side {
        display: flex;
        flex-direction: column;
        padding-left:30%;
        gap: 1rem;
        padding-right:100px;
        padding-right: 0px;
    }

    &__card {
        p {
            padding: 40px 16px 30px 32px;
            font-size: 20px;
            font-weight: 400;
        }
    }

    &__description {
        padding-left: 2.5rem;
        margin: 0;

        h1 {
            font-family: 25px;
            font-weight: 600;
        }

        p {
            padding-top: 31px;
            font-size: 18px;
            font-weight: 500;
            margin: 0;
            padding-bottom: 19px;
            border-bottom: 2px solid $AZUL-DNC;
            width: 85%;
        }
    }

    &__right-side {
        display: flex;
        flex-direction: column;
        width:800px;
        padding-left:15%;

        h1 {
            margin: 0;
            padding-bottom: 28px;
            border-bottom: 3px solid $AZUL-DNC;
        }

        h3 {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 900;
            font-size: 32px;
            line-height: 20px;
            text-align: left;
            color: #2D2D2D;
            margin: 0;
            padding-top: 61px;
            padding-bottom: 27px;
        }

        h4 {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 20px;
            color: #2D2D2D;
            text-shadow: 0px 4px 4px rgba(203, 203, 203, 0.25);
            margin: 0;
            padding-bottom: 21px;
        }

        img {
            padding-right: 13px;
        }

        button {
            background-color: $AZUL-DNC;
            width: 510px;
            height: 61px;
            border: 0;
            border-radius: 10px;
            margin-top: 130px;
            margin-left: 54px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;
        }
    }
}

// Essas linhas de codigos foram acrescentadas para que do fundo do modal fique escura conforme figma.
.product-detail--modal-active{
    background: #2D2D2D;
}

.product-detail--modal-active .product-detail__left-side {
    display: none;
}

.product-detail--modal-active .product-detail__right-side {
    display: none;
}
```

*ModalCart<br>
Componente responsavel por ser o Modal resultado do clique do botão Adicionar ao Carrinho do componente ProductDetail, contendo a imagem, nome, preço e cor do produto escolhido. Contém dois botões: Continuar comprando, que quando clicado volta para pagina de selecão de produtos, e o botão Finalizar compra, que quando clicado é direcionado para outro Modal.

Código utilizado para criação do ModalCart:
```
s (27 sloc)  944 Bytes
 

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

        <h1>Finalizar Compra:</h1>
        <label htmlFor="nome">Digite seu nome:</label>
        <input type="text" id="nome" name="nome" />

        <label htmlFor="cpf">Digite seu CPF:</label>
        <input type="text" id="cpf" name="cpf" />

        <label htmlFor="endereço">Endereço:</label>
        <input type="text" id="endereço" name="endereço" />

        <label htmlFor="pagamento">Forma de Pagamento:</label>
        <input type="text" id="pagamento" name="pagamento" />

        <button onClick={handleContinueShopping}>Confirmar Pedido</button>
      </div>
    </div>
  );
};

export default ModalCart;
```

Código utilizado para estilizar o componente ModalCart:
```
@use "../../sass/variables.scss" as *;

.modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(219, 218, 218, 0.449);
    display: flex;
    justify-content: center;
    align-items: center;
}
  
  .modal__content {
    background-color: white;
    border-radius: 90px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 1000px;
    height: 600px;
}
  
  .modal__close {
    position: absolute;
    top: 0;
    right: 90px;
    cursor: pointer;
    color: rgba(43, 43, 43, 0.777);
    font-size: 90px;
}
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0069d9;
  }
```

*ModalForm<br>
Componente responsavel por ser o Modal resultado do clique do botão Finalizar compra do componente ModalCart. Esse componente basicamente é a finalização da compra, onde é requisitado através de um formulário informações como: Nome, CPF, Endereço e Forma de Pagamento, o modal tambem possui um botão chamado Confirmar Pedido.

Código utilizado para criação do ModalForm:
```
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
```

Código utilizado para estilizar o componente ModalForm:
```
@use "../../sass/variables.scss" as *;.modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(219, 218, 218, 0.449);
    display: flex;
    justify-content: center;
    align-items: center;

  }
  
  .modal__content {
    background-color: white;
    border-radius: 90px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 1000px;
    height: 600px;

  }
  
  .modal__close {
    position: absolute;
    top: 0;
    right: 90px;
    cursor: pointer;
    color: rgba(43, 43, 43, 0.777);
    font-size: 90px;
  }
  
  .modal__content--flex {
    display: flex;
    flex-direction: row;
  }
  
  .modal__content__right {
    margin-left: 40px;
  }

  .imageModal{
    width: 270px;
    height: 195px;
    margin-top: 130px;
    margin-left: 60px;
    margin-right: 60px;
  }

  .h1bold{
    font-family: 'Raleway';
    font-style: normal;
    color: $AZUL-DNC;
    font-weight: bold;
    margin-top: 60px;
    margin-bottom: 30px;
  }

hr{
background-color: $AZUL-DNC;
height: 3px;
width: 350px;
margin-top: 12px;
}

  .h2bold{
    font-family: 'Raleway';
    font-size: 25px;
    font-style: normal;
    color: black;
    font-weight: bold;
    margin-top: 20px;
  }

  h4{
    margin-top: 8px;
    margin-bottom: 20px;
  }

  .modal__content__colors{
    margin-bottom: 38px;
    margin-left: 5px;
  } 

  button{
    width: 350px;
    margin-top: 30px;
  }

  button:hover{
    background-color: $CINZA-DNC;
    transition: background-color 0.5s ease;
  }
```



### Explicando cada View e suas funções:

*Login<br>
É a página inicial do E-commerce, contendo apenas o componente Header. A estruturação do formulário foi criado na própria View. É solicitado nesse form o CPF e Senha do Usuário e um botão de Entrar. Após ser validado os campos a página Home "entra em cena".

Na criação da View Login foi importado apenas um componente e o restante do código foi desenvolvido na própria View:

```
import { Link } from "react-router-dom";
import "./index.scss";
import React from "react";
import Header from "../../components/Header/header";


const login = () => {
  return (
    <div>
    <Header />
    <section className='login'>
        <form className='login__form'>
            <h1>Acesse com seu login ou cadastre-se!</h1>
            <h2>você pode entrar com seu CPF.</h2>
            <div className='login__input-wrapper'>
                <label>Digite seu CPF:</label>
                <input type='number' placeholder="Somente números" id="cpf1" className='login__input-cpf'>

                </input>
                <label htmlFor="password">Senha:</label>
                <input type='password' id='password1' placeholder='********'/>
            </div>
            
            <button type="button" onClick={() =>{
              const cpf1 = document.getElementById('cpf1');
              const senha1 = document.getElementById('password1');

                if(cpf1.value === window.localStorage.getItem('cpf') && senha1.value === window.localStorage.getItem('senha')){
                  window.location.href = "home";
                } else {
                  alert("Dados não cadastrados! Favor corrigir dados ou realizar novo cadastro.");
                }

              } 
            }>
                Entrar
            </button>
          
            <h3>Não tem cadastro? <Link to={"/cadastro"}>Cadastre-se aqui!</Link></h3>
        </form>

    </section>
    </div>

  )
}

export default login;
```

*Cadastro<br>
É a página responsavel por criar o cadastro de Usuario e Senha, pedindo ao usuario para digitar seu CPF com os 11 números e Senha com no minimo 4 e no máximo 10 digitos para validação de campos, após ser preenchidos os campos ao clicar no botão Registrar o usuário é registrado e deve voltar a página de Login e preencher usuario e senha que acabou de cadastrar na página de Cadastro.

```
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./index.scss";
import Header from "../../components/Header/header";

const cadastro = () => {
  
  return (
    <section className='cadastro'>
        <Header />
        <form className='cadastro__form'>
            <h1>Faça o seu cadastro</h1>
            <h2>e tenha acesso a uma infinidade de produtos!</h2>
            <div className='cadastro__input-wrapper'>
                <label>Digite seu CPF:</label>
                <input type='number' name='cpf' placeholder="Somente números" id="cpf" className='cadastro__input-cpf' />

                <label htmlFor="password">Senha:</label>
                <input type='password' id='password' name='password' placeholder='De 4 a 10 dígitos' className='cadastro__input-senha'/>
            </div>
            <button type='button' onClick={() => {
              let cpf = document.getElementById('cpf').value;
              let senha = document.getElementById('password').value;

              if(cpf.length == 11 && senha.length > 3 && senha.length < 11){
              window.localStorage.setItem("cpf", cpf)
              window.localStorage.setItem("senha", senha)
              alert("Cadastro realizado! Volte a página de login e aproveite nossos produtos!")
              
              } else {
                alert("CPF deve conter os 11 dígitos (apenas números)! Senha deve ter entre 4 e 10 dígitos!")
              }
           
            }
          } 
              className='button'>
                Registrar!
            </button>
            <h3>Já tem cadastro? Clique <Link to={"/"}>aqui</Link> para voltar a página de login.</h3>
        </form>

    </section>
  )
}

export default cadastro;
```

*Home<br>
É a página principal do site, contendo os componentes HeaderSearch, Footer e Carts. A estrutução dessa View é feita chamando os componentes já criados e posicionando os mesmos através do Scss.

```
import React from 'react'
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderSearch from "../../components/HeaderSearch/headerSearch";
import Footer from '../../components/Footer/footer'
import Cards from '../../components/Cards/cards'

const Home = ({data}) => {
   console.log(data)

  return (
    <div className='home'>
      <HeaderSearch/>
      <section >
        <img className='home_img' src='../src/assets/cover.png' alt='Website Cover'/>
      </section>
      <section className='home_cards'>
      {data.map( (product) => 
      (<Cards key={data.id} data={product}/>
      ))}
      </section>

    <Footer />
    </div>
  )
}

export default Home
```


*Product<br>
É a página de detalhamento do produto, contendo os componentes HeaderSearch, Footer e ProductDetail, com foco em montrar a imagem, titulo, preço, opção de cores e descrição daquele produto selecionado. Contem o botão "Adicionar ao carrinho", que quando clicado, abre um Modal.

```
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
```


### Quais foram as dificuldades encontradas no desenvolvimento?
Algumas dificuldades encontradas:

* Fazer o MERGE de uma BRANCH para o DEVELOP, pois era necessário visualizar se o código estava alinhado com as informações que foram criadas das outras BRANCHS que cada desenvolvedor criou.

* Fazer um GIT PULL da DEVELOP e não vir os dados alinhados.

* Trabalhar com outras branchs.



## ✅ Deploy

### Ferramentas para deploy
Para realizar o deploy do projeto utilizamos o GITHUB, plataforma de versionamento de código, que nos foi muito útil para organizar de forma estruturada todo código do projeto e acompanhar todo o processo até o resultado final.

### Experiência do teste da plataforma
Uma experiência bem interessante, pois atendeu a expectativa de todos os envolvidos no projeto, atinjindo o objetivo inicial proposto pelo escopo de planejamento e solução de problemas.
