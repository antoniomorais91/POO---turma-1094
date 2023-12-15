class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  }
  
  class Fornecedor {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  class Pedido {
    constructor(produto, quantidade) {
      this.produto = produto;
      this.quantidade = quantidade;
      this.status = 'pendente';
    }
  
    processarPedido() {
      this.produto.quantidade += this.quantidade;
      this.status = 'concluído';
    }
  }
  
  class Estoque {
    constructor() {
      this.produtos = [];
    }
  
    adicionarProduto(produto) {
      this.produtos.push(produto);
    }
  
    fazerPedidoReposicao(produto, quantidadeMinima) {
      if (produto.quantidade < quantidadeMinima) {
        const pedido = new Pedido(produto, quantidadeMinima - produto.quantidade);
        return pedido;
      } else {
        return null; // Não é necessário fazer pedido de reposição
      }
    }
  
    registrarChegadaProduto(pedido) {
      if (pedido.status === 'concluído') {
        console.log(`Produto ${pedido.produto.nome} recebido. Quantidade: ${pedido.quantidade}`);
      } else {
        console.log('Pedido ainda não processado.');
      }
    }
  }
  
  // Exemplos de uso:
  
  // Criar produtos
  const produto1 = new Produto('Produto A', 10.0, 20);
  const produto2 = new Produto('Produto B', 15.0, 15);
  
  // Criar fornecedor
  const fornecedor = new Fornecedor('Fornecedor XYZ');
  
  // Criar estoque
  const estoque = new Estoque();
  
  // Adicionar produtos ao estoque
  estoque.adicionarProduto(produto1);
  estoque.adicionarProduto(produto2);
  
  // Fazer pedido de reposição
  const pedidoReposicao = estoque.fazerPedidoReposicao(produto1, 30);
  
  if (pedidoReposicao) {
    console.log(`Pedido de reposição feito para ${pedidoReposicao.produto.nome}. Quantidade: ${pedidoReposicao.quantidade}`);
    // Simular chegada de produtos após o pedido
    pedidoReposicao.processarPedido();
    estoque.registrarChegadaProduto(pedidoReposicao);
  } else {
    console.log('Não é necessário fazer pedido de reposição.');
  }
  