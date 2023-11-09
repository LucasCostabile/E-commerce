if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

let listaProdutos=
[
    {
        nome:"Cabo Flexível Branco 4mm",
        preco:"R$ 180,00",
        imagem:"./assets/cabo branco.png"
    },
    {
        nome:"Disjuntor Bipolar 20a 380VCA",
        preco:"R$ 35,50",
        imagem:"./assets/disjuntor_bipolar.png"
    }
    ,
    {
        nome:"Disjuntor Monopolar 10a 220VCA",
        preco:"R$ 9,80",
        imagem:"./assets/disjuntor_monopolar.png"
    }
    ,
    {
        nome:"Disjuntor Tripolar 60a 400VCA",
        preco:"R$ 65,99",
        imagem:"./assets/disjuntor_tripolar.png"
    }
    ,
    {
        nome:"Cabo Flexível Azul 6mm",
        preco:"R$ 220,00",
        imagem:"./assets/cabo azul.png"
    }
    ,
    {
        nome:"Cabo Flexível Preto 2,5mm",
        preco:"R$ 150,00",
        imagem:"./assets/cabo preto.png"
    }
    ,
    {
        nome:"Lampada Led 12w",
        preco:"R$ 9,99",
        imagem:"./assets/lampada-led.png"
    }
    ,
    {
        nome:"Lampada Led 15w",
        preco:"R$ 14,99",
        imagem:"./assets/lampada-led.png"
    }
    ,
    {
        nome:"Lampada Led 9w",
        preco:"R$ 7,99",
        imagem:"./assets/lampada-led.png"
   }    
]

const itensJson= listaProdutos.map((item)=>{
  return`
  <li>
  <img class="imagem" src="${item.imagem}" alt="">
  <h3 class="nome-produto">${item.nome}</h3>
  <div>
      <p class="preco-produto">${item.preco}</p>
      <button class="btn-add-carrinho" type="button">
         Comprar
      </button>
  </div>
  </li>
  
  `
  })
  const cardProdutos=document.querySelector(".card-produtos__lista-produtos");
  cardProdutos.innerHTML=itensJson.join("");


// aguardar a pagina Html carregar para iniciar o Js, devido a eventos ainda não criados no html com isso criamos a função ready


// quantia total do carrinho
let totalAmount = "0,00"

function ready() {

  // Botão remover produto localizado  através do getElementsbyClassName e loop for para percorrer cada botão que será clicado
  const removeCartProductButtons = document.getElementsByClassName("remove-product-button")

  for (let i = 0; i < removeCartProductButtons.length; i++) {
    removeCartProductButtons[i].addEventListener("click", removeProduct)

  }

  // Mudança valor dos inputs localizado  através do getElementsbyClassName e loop for para percorrer os inputs
  const quantityInputs = document.getElementsByClassName("product-qtd-input")
  for (let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("change", checkIfInputIsNull)

  }

  // Botão add produto ao carrinho localizado  através do getElementsbyClassName e loop for para percorrer os botões
  const addToCartButtons = document.getElementsByClassName("btn-add-carrinho")
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addProductToCart)
  }

  // Botão comprar
  const purchaseButton = document.getElementsByClassName("purchase-button")[0]
  purchaseButton.addEventListener("click", makePurchase)
}

function removeProduct(event) {
  event.target.parentElement.parentElement.remove()

  if (event.target.id == "removeProduct") {
    const tabela = document.getElementById("table-itens");
    // Obtém todas as linhas da tabela
    const linhas = tabela.getElementsByClassName("cart-product");

    let totalInputs = 0;
    // Percorrer todas as linhas da tabela
    for (let i = 0; i < linhas.length; i++) {

      // Encontra o input dentro da linha
      let input = linhas[i].querySelector(".product-qtd-input");
      let valorInput = input ? parseInt(input.value) : 0;

      // Adiciona o valor do input ao totalInputs
      totalInputs += valorInput;

    }

    itensCarrinho.textContent = totalInputs;

  }

  updateTotal()
}

// verifica se o input é igual a zero. Se sim, excluir produto do carrinho
function checkIfInputIsNull(event) {

  if (event.target.value === "0") {
    event.target.parentElement.parentElement.remove()
  }

  const tabela = document.getElementById("table-itens");
  // Obtém todas as linhas da tabela 
  const linhas = tabela.getElementsByClassName("cart-product");

  let totalInputs = 0;
  // Percorrer todas as linhas da tabela
  for (let i = 0; i < linhas.length; i++) {

    // Encontra o input dentro da linha
    let input = linhas[i].querySelector(".product-qtd-input");
    let valorInput = input ? parseInt(input.value) : 0;

    // Adiciona o valor do input ao totalInputs
    totalInputs += valorInput;

  }

  itensCarrinho.textContent = totalInputs;
  updateTotal()
}





// função para manipular as informações que irão para o carrinho
function addProductToCart(event) {

  const button = event.target
  const productInfos = button.parentElement.parentElement // acessando o elemento Pai
  const productImage = productInfos.getElementsByClassName("imagem")[0].src // capturando a imagem do produto
  const productName = productInfos.getElementsByClassName("nome-produto")[0].innerText // capturando o nome do produto 
  const productPrice = productInfos.getElementsByClassName("preco-produto")[0].innerText // capturando o preço do produto

  //Verifica se o produto ja esta no carrinho 
  const productsCartNames = document.getElementsByClassName("cart-product-title")// selecionando os elementos pela classe 
  for (let i = 0; i < productsCartNames.length; i++) {
    if (productsCartNames[i].innerText === productName) { // comparando o nome do produto
      productsCartNames[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++ // acessando o valor do input e chamando a funçao para atualizar o preço 

      updateTotal()
      return
    }
  }
  // criando novo elemento para exibir no carrinho
  let newCartProduct = document.createElement("tr")
  newCartProduct.classList.add("cart-product")

  newCartProduct.innerHTML =
    `
      <td class="product-identification">
        <img src="${productImage}" alt="${productName}" class="cart-product-image">
        <strong class="cart-product-title">${productName}</strong>
      </td>
      <td>
        <span class="cart-product-price">${productPrice}</span>
      </td>
      <td>
        <input type="number" value="1" min="0" class="product-qtd-input">
        <button id="removeProduct" type="button" class="remove-product-button">Remover</button>
      </td>
    `

  const tableBody = document.querySelector(".cart-table tbody") // usando o querySelector para localizar o tbody
  tableBody.append(newCartProduct)// usando o append para adicionar no final do tbody o elemento tr
  updateTotal()// chamando a função para atualizar o preço 

  newCartProduct.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeProduct)// analisando o click para remover
  newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfInputIsNull)// analisando as alterações no input
}

// verifica se o carrinho esta vazio
function makePurchase() {
  if (user.textContent == "") {
    alert("falta logar")

  }
  else if ((totalAmount === "0,00")) {
    alert("Seu carrinho está vazio!")

  }
  else if (totalAmount !== "0,00" && user.textContent !== "") {
    alert(
      `
      Obrigado pela sua compra!
      Valor do pedido: R$${totalAmount}\n
      Volte sempre :)
    `
    )

    document.querySelector(".cart-table tbody").innerHTML = ""// apos efetuar compra limpa dados carrinho
    updateTotal()
    itensCarrinho.textContent = "";
  }
}

// Atualizar o valor total do carrinho
function updateTotal() {

  totalAmount = 0
  const cartProducts = document.getElementsByClassName("cart-product")
  // loop for para percorrer a quantidade de produtos no carrinho 
  for (let i = 0; i < cartProducts.length; i++) {
    //acessamos cada produto com "cartProducts[i]" através da Classe com a posição [0], "innerText" foi usado para acessar o texto, e "replace" para substituir
    const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
    const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value
    // atraves do produto analisado cartProducts[i] com a classe de quantidade do input acessamos a posição [0] que é retornado, com o "value" acessamos o valor
    totalAmount += productPrice * productQuantity
    // quantia total é igual a ela mesma + o resultado de preço do produto multiplicado pela quantidade 
  }

  totalAmount = totalAmount.toFixed(2) // arredondado para 2 casas decimais
  totalAmount = totalAmount.replace(".", ",") // trocando o ponto por virgula
  document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
  // selecionando o elemento com o querySelector, usamos o innerText para acessar o valor e fazemos a concatenação do R$ com a quantia final
}

  const sms = document.getElementsByClassName("btn-add-carrinho");
  const itensCarrinho = document.getElementById("itens-carrinho");
for (let i = 0; i < sms.length; i++) {
  sms[i].addEventListener("click", (event) => {
    itensCarrinho.textContent++; 
    const button = event.target
    const elementPai = button.parentElement.parentElement

    if (!elementPai.classList.contains("mgs-add_carrinho")) { // verefica se a classe existe 
      elementPai.classList.add("mgs-add_carrinho");  // cria a classe se não existir
      let paragrafo = document.createElement("p");
      paragrafo.innerHTML = "<a>Produto no Carrinho</a>";

      elementPai.appendChild(paragrafo);

      setTimeout(() => {
        elementPai.removeChild(paragrafo);
        elementPai.classList.remove("mgs-add_carrinho")
      }, 1000);
    }
  });
}

