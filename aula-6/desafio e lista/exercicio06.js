// Classe Espetaculo
class Espetaculo {
    constructor(titulo, data, horario, assentosDisponiveis) {
      this.titulo = titulo;
      this.data = data;
      this.horario = horario;
      this.assentosDisponiveis = assentosDisponiveis;
    }
  
    exibirDetalhes() {
      console.log(`Espetáculo: ${this.titulo}`);
      console.log(`Data e Horário: ${this.data} às ${this.horario}`);
      console.log(`Assentos Disponíveis: ${this.assentosDisponiveis}`);
    }
  }
  
  // Classe Cliente
  class Cliente {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  // Classe Reserva
  class Reserva {
    constructor(cliente, espetaculo, quantidadeAssentos) {
      this.cliente = cliente;
      this.espetaculo = espetaculo;
      this.quantidadeAssentos = quantidadeAssentos;
    }
  
    realizarReserva() {
      if (this.quantidadeAssentos <= this.espetaculo.assentosDisponiveis) {
        this.espetaculo.assentosDisponiveis -= this.quantidadeAssentos;
        console.log(`${this.cliente.nome} reservou ${this.quantidadeAssentos} assentos para ${this.espetaculo.titulo}.`);
      } else {
        console.log(`Desculpe, não há assentos disponíveis suficientes para ${this.espetaculo.titulo}.`);
      }
    }
  }
  
  // Classe Teatro
  class Teatro {
    constructor() {
      this.espetaculosAgendados = [];
    }
  
    agendarEspetaculo(espetaculo) {
      this.espetaculosAgendados.push(espetaculo);
    }
  
    exibirEspetaculos() {
      console.log("Espetáculos Agendados:");
      this.espetaculosAgendados.forEach((espetaculo) => {
        espetaculo.exibirDetalhes();
      });
    }
  }
  
  // Exemplos de Uso
  const teatro = new Teatro();
  
  const espetaculo1 = new Espetaculo("Peça 1", "2023-12-15", "19:00", 50);
  const espetaculo2 = new Espetaculo("Show Musical", "2023-12-20", "20:30", 30);
  
  teatro.agendarEspetaculo(espetaculo1);
  teatro.agendarEspetaculo(espetaculo2);
  
  const cliente1 = new Cliente("João");
  const cliente2 = new Cliente("Maria");
  
  const reserva1 = new Reserva(cliente1, espetaculo1, 2);
  reserva1.realizarReserva();
  
  const reserva2 = new Reserva(cliente2, espetaculo2, 40);
  reserva2.realizarReserva();
  
  teatro.exibirEspetaculos();
  