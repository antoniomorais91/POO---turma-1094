// Definindo a classe Categoria
class Categoria {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  // Definindo a classe Transacao (superclasse para Despesa e Receita)
  class Transacao {
    constructor(valor, data, categoria) {
      this.valor = valor;
      this.data = data;
      this.categoria = categoria;
    }
  }
  
  // Definindo a classe Despesa que herda de Transacao
  class Despesa extends Transacao {
    constructor(valor, data, categoria) {
      super(valor, data, categoria);
    }
  }
  
  // Definindo a classe Receita que herda de Transacao
  class Receita extends Transacao {
    constructor(valor, data, categoria) {
      super(valor, data, categoria);
    }
  }
  
  // Definindo a classe Orcamento
  class Orcamento {
    constructor() {
      this.despesas = [];
      this.receitas = [];
    }
  
    registrarDespesa(despesa) {
      this.despesas.push(despesa);
    }
  
    registrarReceita(receita) {
      this.receitas.push(receita);
    }
  
    calcularSaldo() {
      const totalDespesas = this.despesas.reduce((total, despesa) => total + despesa.valor, 0);
      const totalReceitas = this.receitas.reduce((total, receita) => total + receita.valor, 0);
      return totalReceitas - totalDespesas;
    }
  
    gerarRelatorio() {
      console.log("----- Relatório Financeiro -----");
      console.log("Despesas:");
      this.despesas.forEach(despesa => console.log(`- ${despesa.valor} em ${despesa.categoria.nome} em ${despesa.data}`));
      console.log("\nReceitas:");
      this.receitas.forEach(receita => console.log(`+ ${receita.valor} de ${receita.categoria.nome} em ${receita.data}`));
      console.log("\nSaldo Total:", this.calcularSaldo());
    }
  }
  
  // Exemplos de uso
  const categoriaAlimentacao = new Categoria("Alimentação");
  const categoriaSalario = new Categoria("Salário");
  
  const despesaComida = new Despesa(150, "2023-12-10", categoriaAlimentacao);
  const receitaSalario = new Receita(3000, "2023-12-05", categoriaSalario);
  
  const orcamentoUsuario = new Orcamento();
  orcamentoUsuario.registrarDespesa(despesaComida);
  orcamentoUsuario.registrarReceita(receitaSalario);
  
  orcamentoUsuario.gerarRelatorio();
  