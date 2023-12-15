class SalaConferencia {
    constructor(nome, capacidade) {
      this.nome = nome;
      this.capacidade = capacidade;
      this.reservas = [];
    }
  
    verificarDisponibilidade(inicio, fim) {
      return !this.reservas.some(reserva => {
        return (
          (inicio >= reserva.inicio && inicio < reserva.fim) ||
          (fim > reserva.inicio && fim <= reserva.fim) ||
          (inicio <= reserva.inicio && fim >= reserva.fim)
        );
      });
    }
  }
  
  class Reserva {
    constructor(sala, usuario, inicio, fim) {
      this.sala = sala;
      this.usuario = usuario;
      this.inicio = inicio;
      this.fim = fim;
    }
  }
  
  class Usuario {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  class Calendario {
    constructor() {
      this.reservas = [];
    }
  
    fazerReserva(sala, usuario, inicio, fim) {
      if (sala.verificarDisponibilidade(inicio, fim)) {
        const reserva = new Reserva(sala, usuario, inicio, fim);
        sala.reservas.push(reserva);
        this.reservas.push(reserva);
        console.log(`Reserva feita por ${usuario.nome} para ${sala.nome}`);
      } else {
        console.log(`Conflito de horários para a sala ${sala.nome}`);
      }
    }
  
    cancelarReserva(reserva) {
      const index = this.reservas.indexOf(reserva);
      if (index !== -1) {
        this.reservas.splice(index, 1);
        const salaIndex = reserva.sala.reservas.indexOf(reserva);
        reserva.sala.reservas.splice(salaIndex, 1);
        console.log(`Reserva cancelada por ${reserva.usuario.nome}`);
      } else {
        console.log(`Reserva não encontrada`);
      }
    }
  
    consultarDisponibilidade() {
      console.log('Reservas no Calendário:');
      this.reservas.forEach(reserva => {
        console.log(`${reserva.sala.nome}: ${reserva.inicio} - ${reserva.fim} por ${reserva.usuario.nome}`);
      });
    }
  }
  
  // Exemplo de uso:
  const salaA = new SalaConferencia('Sala A', 10);
  const salaB = new SalaConferencia('Sala B', 8);
  
  const usuario1 = new Usuario('João');
  const usuario2 = new Usuario('Maria');
  
  const calendario = new Calendario();
  
  calendario.fazerReserva(salaA, usuario1, '2023-12-11 10:00', '2023-12-11 11:30');
  calendario.fazerReserva(salaB, usuario2, '2023-12-11 12:00', '2023-12-11 13:30');
  calendario.fazerReserva(salaA, usuario1, '2023-12-11 14:00', '2023-12-11 15:30'); // Tentando reservar no mesmo horário da primeira reserva
  
  calendario.consultarDisponibilidade();
  
  const reservaParaCancelar = calendario.reservas[0];
  calendario.cancelarReserva(reservaParaCancelar);
  
  calendario.consultarDisponibilidade();
  