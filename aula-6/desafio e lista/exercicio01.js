class Hotel {
    constructor(nome) {
      this.nome = nome;
      this.quartos = [];
      this.reservas = [];
    }
  
    adicionarQuarto(quarto) {
      this.quartos.push(quarto);
    }
  
    listarQuartosDisponiveis(periodo) {
      return this.quartos.filter(quarto => quarto.estaDisponivel(periodo));
    }
  
    fazerReserva(hospede, quarto, periodo) {
      if (quarto.estaDisponivel(periodo)) {
        const reserva = new Reserva(hospede, quarto, periodo);
        this.reservas.push(reserva);
        quarto.adicionarReserva(reserva);
        return reserva;
      } else {
        console.log('Quarto não disponível para o período selecionado.');
        return null;
      }
    }
  
    exibirInformacoes() {
      console.log(`Informações do Hotel ${this.nome}:`);
      console.log('Quartos:');
      this.quartos.forEach(quarto => quarto.exibirInformacoes());
      console.log('Reservas:');
      this.reservas.forEach(reserva => reserva.exibirInformacoes());
    }
  }
  
  class Quarto {
    constructor(numero, tipo) {
      this.numero = numero;
      this.tipo = tipo;
      this.disponivel = true;
      this.reservas = [];
    }
  
    estaDisponivel(periodo) {
      return this.disponivel && !this.reservas.some(reserva => reserva.interfereCom(periodo));
    }
  
    adicionarReserva(reserva) {
      this.reservas.push(reserva);
      this.disponivel = false;
    }
  
    exibirInformacoes() {
      console.log(`Quarto ${this.numero} - Tipo: ${this.tipo} - Disponível: ${this.disponivel}`);
    }
  }
  
  class Hospede {
    constructor(nome, email) {
      this.nome = nome;
      this.email = email;
    }
  }
  
  class Reserva {
    constructor(hospede, quarto, periodo) {
      this.hospede = hospede;
      this.quarto = quarto;
      this.periodo = periodo;
    }
  
    interfereCom(outroPeriodo) {
      return (
        (outroPeriodo.inicio >= this.periodo.inicio && outroPeriodo.inicio < this.periodo.fim) ||
        (outroPeriodo.fim > this.periodo.inicio && outroPeriodo.fim <= this.periodo.fim)
      );
    }
  
    exibirInformacoes() {
      console.log(
        `Reserva para ${this.hospede.nome}, Quarto ${this.quarto.numero}, Período: ${this.periodo.inicio} a ${this.periodo.fim}`
      );
    }
  }
  
  // Exemplo de uso:
  
  const hotel = new Hotel('Hotel Example');
  
  const quarto1 = new Quarto(101, 'simples');
  const quarto2 = new Quarto(201, 'duplo');
  const quarto3 = new Quarto(301, 'suíte');
  
  hotel.adicionarQuarto(quarto1);
  hotel.adicionarQuarto(quarto2);
  hotel.adicionarQuarto(quarto3);
  
  const hospede1 = new Hospede('João', 'joao@example.com');
  const hospede2 = new Hospede('Maria', 'maria@example.com');
  
  const periodoReserva = { inicio: new Date('2023-01-01'), fim: new Date('2023-01-05') };
  
  const reserva1 = hotel.fazerReserva(hospede1, quarto1, periodoReserva);
  const reserva2 = hotel.fazerReserva(hospede2, quarto2, periodoReserva);
  
  hotel.exibirInformacoes();
  