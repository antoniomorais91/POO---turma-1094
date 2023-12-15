// Definição da classe Produto
class Produto {
    constructor(nome, preco, quantidadeDisponivel) {
      this.nome = nome;
      this.preco = preco;
      this.quantidadeDisponivel = quantidadeDisponivel;
    }
  }
  
  // Definição da classe Estoque
  class Estoque {
    constructor() {
      this.produtos = [];
    }
  
    adicionarProduto(produto) {
      this.produtos.push(produto);
    }
  
    atualizarEstoque(carrinho) {
      carrinho.itens.forEach(item => {
        const produtoNoEstoque = this.produtos.find(p => p.nome === item.produto.nome);
        if (produtoNoEstoque) {
          produtoNoEstoque.quantidadeDisponivel -= item.quantidade;
        }
      });
    }
  }
  
  // Definição da classe CarrinhoDeCompras
  class CarrinhoDeCompras {
    constructor() {
      this.itens = [];
    }
  
    adicionarItem(produto, quantidade) {
      this.itens.push({ produto, quantidade });
    }
  
    calcularTotal() {
      return this.itens.reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
    }
  }
  
  // Definição da classe Cliente
  class Cliente {
    constructor(nome) {
      this.nome = nome;
    }
  
    realizarCompra(carrinho, estoque) {
      // Calcula o total da compra
      const totalCompra = carrinho.calcularTotal();
  
      // Atualiza o estoque
      estoque.atualizarEstoque(carrinho);
  
      // Retorna o total da compra
      return totalCompra;
    }
  }
  
  // Exemplo de uso
  const produto1 = new Produto('Arroz', 5.0, 50);
  const produto2 = new Produto('Feijão', 3.5, 30);
  
  const estoque = new Estoque();
  estoque.adicionarProduto(produto1);
  estoque.adicionarProduto(produto2);
  
  const carrinho = new CarrinhoDeCompras();
  carrinho.adicionarItem(produto1, 2);
  carrinho.adicionarItem(produto2, 1);
  
  const cliente = new Cliente('João');
  const totalCompra = cliente.realizarCompra(carrinho, estoque);
  
  console.log(`Cliente: ${cliente.nome}`);
  console.log(`Total da compra: R$${totalCompra.toFixed(2)}`);
  console.log('Estoque atualizado:', estoque.produtos);
  