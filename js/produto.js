class Produto{
constructor(id_produto, nome, descricao, preco, qtdeEstoque,imgProduto){
this.id_produto=id_produto;
this.nome=nome;
this.descricao=descricao;
this.preco=preco;
this.qtdeEstoque=qtdeEstoque;
this.imgProduto=imgProduto;
}

descreverProduto() {
    console.log(`ID: ${this.id_produto}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Descrição: ${this.descricao}`);
    console.log(`Preço: ${this.preco}`);
    console.log(`Quantidade em Estoque: ${this.qtdeEstoque}`);
    console.log(`Imagem: ${this.imgProduto}`);
  }
}



const produto1 = new Produto(1, "Lampada", "lampada tal e tal", 10, 10, "imagem_lampada.jpg");

produto1.descreverProduto();


