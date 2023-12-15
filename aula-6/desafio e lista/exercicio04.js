class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  
  class CarrinhoDeCompras {
    constructor() {
      this.produtos = [];
    }
  
    adicionarProduto(produto) {
      this.produtos.push(produto);
    }
  
    calcularTotal() {
      return this.produtos.reduce((total, produto) => total + produto.preco, 0);
    }
  }
  
  class Cliente {
    constructor(nome) {
      this.nome = nome;
      this.carrinho = new CarrinhoDeCompras();
    }
  
    realizarPedido() {
      const pedido = new Pedido(this.carrinho);
      return pedido;
    }
  }
  
  class Pedido {
    constructor(carrinho) {
      this.produtos = carrinho.produtos;
      this.statusEntrega = "pendente";
    }
  
    atualizarStatusEntrega(status) {
      this.statusEntrega = status;
    }
  }
  
  // Exemplo de uso:
  
  // Criar alguns produtos
  const produto1 = new Produto("Camiseta", 29.99);
  const produto2 = new Produto("Calça Jeans", 49.99);
  
  // Criar um cliente
  const cliente1 = new Cliente("João");
  
  // Adicionar produtos ao carrinho do cliente
  cliente1.carrinho.adicionarProduto(produto1);
  cliente1.carrinho.adicionarProduto(produto2);
  
  // Calcular o total do pedido
  const totalPedidoCliente1 = cliente1.carrinho.calcularTotal();
  console.log(`Total do pedido de ${cliente1.nome}: $${totalPedidoCliente1.toFixed(2)}`);
  
  // Realizar um pedido
  const pedidoCliente1 = cliente1.realizarPedido();
  
  // Atualizar o status de entrega
  pedidoCliente1.atualizarStatusEntrega("em andamento");
  console.log(`Status de entrega do pedido de ${cliente1.nome}: ${pedidoCliente1.statusEntrega}`);
  