class Colaborador {
    constructor(nome, habilidades) {
      this.nome = nome;
      this.habilidades = habilidades;
    }
  }
  
  class Tarefa {
    constructor(nome, descricao, colaboradores = []) {
      this.nome = nome;
      this.descricao = descricao;
      this.colaboradores = colaboradores;
      this.concluida = false;
    }
  
    atribuirColaborador(colaborador) {
      this.colaboradores.push(colaborador);
    }
  
    marcarComoConcluida() {
      this.concluida = true;
    }
  }
  
  class Projeto {
    constructor(nome, tarefas = []) {
      this.nome = nome;
      this.tarefas = tarefas;
    }
  
    adicionarTarefa(tarefa) {
      this.tarefas.push(tarefa);
    }
  
    exibirInformacoes() {
      console.log(`Projeto: ${this.nome}`);
      console.log('Tarefas:');
      this.tarefas.forEach((tarefa, index) => {
        console.log(`  ${index + 1}. ${tarefa.nome} - Concluída: ${tarefa.concluida}`);
        console.log('     Colaboradores:');
        tarefa.colaboradores.forEach((colaborador) => {
          console.log(`       - ${colaborador.nome}`);
        });
      });
    }
  }
  
  class Equipe {
    constructor(colaboradores = []) {
      this.colaboradores = colaboradores;
    }
  
    adicionarColaborador(colaborador) {
      this.colaboradores.push(colaborador);
    }
  }
  
  // Exemplos de uso:
  
  const desenvolvedor1 = new Colaborador('João', ['JavaScript', 'HTML', 'CSS']);
  const desenvolvedor2 = new Colaborador('Maria', ['JavaScript', 'Python']);
  
  const equipe = new Equipe([desenvolvedor1, desenvolvedor2]);
  
  const tarefa1 = new Tarefa('Implementar funcionalidade X', 'Desenvolver a funcionalidade X');
  tarefa1.atribuirColaborador(desenvolvedor1);
  
  const tarefa2 = new Tarefa('Corrigir bugs', 'Corrigir os bugs encontrados no sistema');
  tarefa2.atribuirColaborador(desenvolvedor2);
  
  const projeto = new Projeto('Projeto ABC', [tarefa1, tarefa2]);
  
  projeto.exibirInformacoes();
  