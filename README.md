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

Header 

HeaderSearch 

Cards 

Footer 

ProductDetail 

ModalCart 

ModalForm <br><br>

Views:

Login 

Home 

Product 
<br><br>

Criar Mock:

Lista de itens<br><br>


### Plano de projeto estimado com prazos!
Cada responsável por suas atividades tinha um prazo determinado para finalizar suas tarefas em cada CARD.

### Pessoas responsáveis no time de desenvolvimento!
As pessoas responsáveis no time foram:

* Priscila ()
* Leandro ()
* Herbert ()
* Nathalia ()
* Marcelo ()
* Christian ()
* Erick ()


## 🚀 Desenvolvimento<br>

### Informações do ambiente de desenvolvimento:
Logo após serem definidas as atividades de cada um dos integrantes começamos a dar inicio no projeto.

O ambiente do projeto foi baseado no seguinte FIGMA: https://www.figma.com/file/sR8p251TiovX0RMWvXW0zX/Projeto-em-Grupo---DNC


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
Login, Home e Product

### Explicando cada compenente e suas funções:

*Header<br>
Componente responsavel por ser o cabeçalho do site, esse componente está presente em todas as páginas do projeto.

*HeaderSearch<br>
Componente responsavel por ser o cabeçalho das demais páginas, tirando a de login, esse componente possui um campo de input para fazer uma possivel pesquisa, um botão para executar o input e tambem links para direcionar para outras páginas (Novidades, Jogos, Video Games, e etc)

*Footer <br>
Componente responsavel por ser o rodapé do site, contendo a logo e outras informações relevantes.

*Cards<br>
Componente responsavel por conter imagem, descrição e botão "ver mais" dos produtos, cada produto com sua imagem e descrição, o produto quando clicado em seu botão "ver mais" é direcionado para outra página.

*ProductDetail<br>
Componente responsavel por ser a página resposta do click do botão "ver mais" do componente Cards. Contém as informações do produto e um botão chamado "Adicionar ao carrinho", que quando clicado abre um Modal com dois botões: Continuar comprando e Finalizar compra.

*ModalCart<br>
Componente responsavel por ser o Modal resultado do clique do botão Adicionar ao Carrinho do componente ProductDetail, contendo a imagem, nome, preço e cor do produto escolhido. Contém dois botões: Continuar comprando, que quando clicado volta para pagina de selecão de produtos, e o botão Finalizar compra, que quando clicado é direcionado para outro Modal.


*ModalForm<br>
Componente responsavel por ser o Modal resultado do clique do botão Finalizar compra do componente ModalCart. Esse componente basicamente é a finalização da compra, onde é requisitado através de um formulário informações como: Nome, CPF, Endereço e Forma de Pagamento, o modal tambem possui um botão chamado Confirmar Pedido.


### Explicando cada View e suas funções:

*Login<br>
É a página inicial do E-commerce, contendo apenas o componente Header. A estruturação do formulário foi criado na própria View. É solicitado nesse form o CPF e Senha do Usuário e um botão de Entrar. Após ser validado os campos a página Home "entra em cena".

*Home<br>
É a página principal do site, contendo os componentes HeaderSearch, Footer e Carts. A estrutução dessa View é feita chamando os componentes já criados e posicionando os mesmos através do Scss.


*Product<br>
É a página de detalhamento do produto, contendo os componentes HeaderSearch, Footer e ProductDetail, com foco em montrar a imagem, titulo, preço, opção de cores e descrição daquele produto selecionado. Contem o botão "Adicionar ao carrinho", que quando clicado, abre um Modal.



### Quais foram as dificuldades encontradas no desenvolvimento?
Algumas dificuldades encontradas:

* Fazer o MERGE de uma BRANCH para o DEVELOP, pois era necessário visualizar se o código estava alinhado com as informações que foram criadas das outras BRANCHS que cada desenvolvedor criou.

* Fazer um GIT PULL da DEVELOP e não vir os dados alinhados.

* Trabalhar com outras branchs.




## ✅ Deploy

### Ferramentas para deploy
Para realizar o deploy do projeto utilizamos o GITHUB, plataforma de versionamento de código, que nos foi muito útil para organizar de forma estruturada todo código do projeto.

### Experiência do teste da plataforma
