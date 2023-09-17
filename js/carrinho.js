// class Produto{
//   constructor(id_produto, nome, descricao, preco, qtdeEstoque,imgProduto){
//   this.id_produto=id_produto;
//   this.nome=nome;
//   this.descricao=descricao;
//   this.preco=preco;
//   this.qtdeEstoque=qtdeEstoque;
//   this.imgProduto=imgProduto;
//   }
  
//   armazenarProdutos() {

//     let objProduto=[
//       {id: 1,
//          nome:"Cabo Flexível 2.5 mm Azul",
//          descricao:"Descrição 1", 
//          preco: 120.00,
//          qtdeEstoque:15,
//          img:"./assets\cabo-flexivel-rolo-100mm-preto-felper_3573.jpg/" 
//           },
//           {id:2,
//             nome:"Cabo Flexível 2.5 mm Branco",
//             descricao:"Descrição 1", 
//             preco: 120.00,
//             qtdeEstoque:10,
//             img:"./assets\cabo-flexivel-rolo-100mm-preto-felper_3573.jpg/" 
//              },
//              {id:3,
//               nome:"Disjuntos Bipolar 10A 220Vca",
//               descricao:"Descrição 1", 
//               preco: 40,
//               qtdeEstoque:8,
//               img:"./assets\disjuntor/" 
//                },

//                {id:4,
//                 nome:"Disjuntos Monopolar 8A 220Vca",
//                 descricao:"Descrição 1", 
//                 preco: 10,
//                 qtdeEstoque:5,
//                 img:"./assets\disjuntor2/" 
//                  },
//                  {id:5,
//                   nome:"Disjuntos Mini Tripolar  100A  220/380Vca",
//                   descricao:"Descrição 1", 
//                   preco: 10,
//                   qtdeEstoque:5,
//                   img:"./assets\disjuntor3/" 
//                    },
//                    {id:6,
//                     nome:"Lampada Led 12w",
//                     descricao:"Descrição 1", 
//                     preco: 12.50,
//                     qtdeEstoque:45,
//                     img:"./assets\led/" 
//                      },
//                      {id:7,
//                       nome:"Lampada Led 9w",
//                       descricao:"Descrição 1", 
//                       preco: 9.25,
//                       qtdeEstoque:55,
//                       img:"./assets\disjuntor2/" 
//                        },
//                        {id:8,
//                         nome:"Lamapa Led 7w",
//                         descricao:"Descrição 1", 
//                         preco: 6,
//                         qtdeEstoque:5,
//                         img:"./assets\disjuntor2/" 
//                          },
                      
//         ];
//         for (const produtoData of objProduto) {
//           const produto = new Produto(
//             produtoData.id,
//             produtoData.nome,
//             produtoData.descricao,
//             produtoData.preco,
//             produtoData.qtdeEstoque,
//             produtoData.img
//           );
//           bdProdutos.push(produto);
          
//         }
        
      
//     }
//   }
  
// const bdProdutos=[];

// const produtos= new Produto();
//   produtos.armazenarProdutos();

//   bdProdutos.map((item,index)=>{
// const img= document.querySelector(".nome-produto").innerHTML = item.nome;
// console.log(item.nome);

//   })
      
  
  

// class CarrinhoCompras{
// constructor(id_Carrinho, itensCarrinho,totalPagar,statusCarrinho){

//     this.id_Carrinho=id_Carrinho;
//     this.itensCarrinho=[];
//     this.totalPagar=totalPagar;
//     this.statusCarrinho=statusCarrinho;

// }

// adicionarItemCarrinho(){

//    // this.itensCarrinho= produto1;
// ;
// //this.itensCarrinho.push(novoProtudo.nome);
// //this.itensCarrinho.push(novoProtudo.qtdeEstoque);
// //this.itensCarrinho.push(novoProtudo.id_produto);
// for(let i=0; i<this.itensCarrinho.length;i++){
// totalItensLista[i]=this.itensCarrinho[i];
// console.log("voce tem esses itens no carrinho " + this.itensCarrinho)
// }

// }

// removerItemCarrinho(){

// totalItensLista.splice(0,1);
// console.log(" itens no carrinho " +totalItensLista);

// }

// calcularTotal(){

// }


// finalizarCarrinho(){


// }

// }


// const totalItensLista=[];
// const novoIten= new CarrinhoCompras();
// novoIten.adicionarItemCarrinho();
// //const testeExcluir= new CarrinhoCompras();
// //testeExcluir.removerItemCarrinho();

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

var totalAmount = "0,00"

function ready() {
  // Botão remover produto
  const removeCartProductButtons = document.getElementsByClassName("remove-product-button")
  for (let i = 0; i < removeCartProductButtons.length; i++) {
    removeCartProductButtons[i].addEventListener("click", removeProduct)
  }

  // Mudança valor dos inputs
  const quantityInputs = document.getElementsByClassName("product-qtd-input")
  for (let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("change", checkIfInputIsNull)
  }

  // Botão add produto ao carrinho
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
  updateTotal()
}

function checkIfInputIsNull(event) {
  if (event.target.value === "0") {
    event.target.parentElement.parentElement.remove()
  }

  updateTotal()
}

function addProductToCart(event) {
  const button = event.target
  const productInfos = button.parentElement.parentElement
  const productImage = productInfos.getElementsByClassName("imagem")[0].src
  const productName = productInfos.getElementsByClassName("nome-produto")[0].innerText
  const productPrice = productInfos.getElementsByClassName("preco-produto")[0].innerText
  console.log(productImage)
  console.log(productName)
  console.log(productPrice)

  
  const productsCartNames = document.getElementsByClassName("cart-product-title")
  for (var i = 0; i < productsCartNames.length; i++) {
    if (productsCartNames[i].innerText === productName) {
      productsCartNames[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
      updateTotal()
      return
    }
  }

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
        <button type="button" class="remove-product-button">Remover</button>
      </td>
    `
  
  const tableBody = document.querySelector(".cart-table tbody")
  tableBody.append(newCartProduct)
  updateTotal()

  newCartProduct.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeProduct)
  newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfInputIsNull)
}

function makePurchase() {
  if (totalAmount === "0,00") {
    alert("Seu carrinho está vazio!")
  } else {   
    alert(
      `
        Obrigado pela sua compra!
        Valor do pedido: R$${totalAmount}\n
        Volte sempre :)
      `
    )

    document.querySelector(".cart-table tbody").innerHTML = ""
    updateTotal()
  }
}

// Atualizar o valor total do carrinho
function updateTotal() {
  const cartProducts = document.getElementsByClassName("cart-product")
  totalAmount = 0

  for (var i = 0; i < cartProducts.length; i++) {
    const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
    const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value

    totalAmount += productPrice * productQuantity
  }
  
  totalAmount = totalAmount.toFixed(2)
  totalAmount = totalAmount.replace(".", ",")
  document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
}