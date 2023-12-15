// Classe Paciente
class Paciente {
    constructor(nome, idade, cpf) {
      this.nome = nome;
      this.idade = idade;
      this.cpf = cpf;
      this.historicoMedico = new HistoricoMedico();
    }
  }
  
  // Classe Medico
  class Medico {
    constructor(nome, especialidade, crm) {
      this.nome = nome;
      this.especialidade = especialidade;
      this.crm = crm;
    }
  
    registrarDiagnostico(consulta, diagnostico) {
      consulta.registrarDiagnostico(diagnostico);
    }
  }
  
  // Classe Consulta
  class Consulta {
    constructor(data, hora) {
      this.data = data;
      this.hora = hora;
      this.diagnostico = null;
    }
  
    registrarDiagnostico(diagnostico) {
      this.diagnostico = diagnostico;
    }
  }
  
  // Classe HistoricoMedico
  class HistoricoMedico {
    constructor() {
      this.consultas = [];
    }
  
    adicionarConsulta(consulta) {
      this.consultas.push(consulta);
    }
  
    consultarHistorico() {
      return this.consultas;
    }
  }
  
  // Exemplo de uso
  const paciente1 = new Paciente('João', 30, '123.456.789-01');
  const medico1 = new Medico('Dr. Silva', 'Cardiologista', 'CRM12345');
  
  const consulta1 = new Consulta('2023-01-15', '10:00');
  const consulta2 = new Consulta('2023-02-20', '14:30');
  
  medico1.registrarDiagnostico(consulta1, 'Pressão alta, recomendar dieta e exercícios.');
  medico1.registrarDiagnostico(consulta2, 'Check-up normal, sem problemas identificados.');
  
  paciente1.historicoMedico.adicionarConsulta(consulta1);
  paciente1.historicoMedico.adicionarConsulta(consulta2);
  
  console.log(`Histórico médico de ${paciente1.nome}:`);
  console.log(paciente1.historicoMedico.consultarHistorico());
  