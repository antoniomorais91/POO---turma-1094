// Classe Carro
class Carro {
    constructor(modelo, placa) {
      this.modelo = modelo;
      this.placa = placa;
      this.disponivel = true;
    }
  }
  
  // Classe Cliente
  class Cliente {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  // Classe Locacao
  class Locacao {
    constructor(cliente, carro, periodo) {
      this.cliente = cliente;
      this.carro = carro;
      this.periodo = periodo;
    }
  
    calcularValor() {
      // Lógica para calcular o valor da locação com base no modelo do carro e no período
      // Aqui, estamos assumindo um valor fixo por dia de locação, independentemente do modelo do carro
      const valorDiario = 50;
      return valorDiario * this.periodo;
    }
  }
  
  // Classe AgenciaLocadora
  class AgenciaLocadora {
    constructor() {
      this.carrosDisponiveis = [];
    }
  
    adicionarCarro(carro) {
      this.carrosDisponiveis.push(carro);
    }
  
    verificarDisponibilidade(modelo) {
      // Verificar a disponibilidade de carros com base no modelo
      const carroDisponivel = this.carrosDisponiveis.find(carro => carro.modelo === modelo && carro.disponivel);
      return carroDisponivel !== undefined;
    }
  
    realizarLocacao(cliente, modelo, periodo) {
      // Verificar a disponibilidade do carro
      const carroDisponivel = this.carrosDisponiveis.find(carro => carro.modelo === modelo && carro.disponivel);
  
      if (carroDisponivel) {
        // Marcar o carro como indisponível
        carroDisponivel.disponivel = false;
  
        // Criar uma nova locação
        const locacao = new Locacao(cliente, carroDisponivel, periodo);
  
        // Retornar a locação
        return locacao;
      } else {
        console.log("Carro não disponível para locação.");
        return null;
      }
    }
  }
  
  // Exemplo de uso
  const agencia = new AgenciaLocadora();
  
  const carro1 = new Carro("Sedan", "ABC123");
  const carro2 = new Carro("SUV", "XYZ789");
  
  agencia.adicionarCarro(carro1);
  agencia.adicionarCarro(carro2);
  
  const cliente = new Cliente("João");
  
  console.log(agencia.verificarDisponibilidade("Sedan")); // true
  
  const locacao = agencia.realizarLocacao(cliente, "Sedan", 3);
  
  if (locacao !== null) {
    console.log("Locação realizada com sucesso.");
    console.log("Valor da locação:", locacao.calcularValor());
  } else {
    console.log("Não foi possível realizar a locação.");
  }
  
  console.log(agencia.verificarDisponibilidade("Sedan")); // false
  