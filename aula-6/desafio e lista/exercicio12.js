class Tarefa {
    constructor(descricao, dataVencimento) {
      this.descricao = descricao;
      this.dataVencimento = dataVencimento;
      this.status = 'Pendente';
    }
  
    marcarComoConcluida() {
      this.status = 'Concluída';
    }
  }
  
  class ListaTarefas {
    constructor(nome) {
      this.nome = nome;
      this.tarefas = [];
    }
  
    adicionarTarefa(tarefa) {
      this.tarefas.push(tarefa);
    }
  
    marcarTarefaComoConcluida(descricao) {
      const tarefa = this.tarefas.find(t => t.descricao === descricao);
      if (tarefa) {
        tarefa.marcarComoConcluida();
      }
    }
  }
  
  class Categoria {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  class Usuario {
    constructor(nome) {
      this.nome = nome;
      this.listasTarefas = [];
    }
  
    criarListaTarefas(nome) {
      const novaLista = new ListaTarefas(nome);
      this.listasTarefas.push(novaLista);
      return novaLista;
    }
  
    criarCategoria(nome) {
      return new Categoria(nome);
    }
  
    organizarTarefaEmLista(tarefa, lista) {
      lista.adicionarTarefa(tarefa);
    }
  
    organizarTarefaEmCategoria(tarefa, categoria) {
      tarefa.categoria = categoria;
    }
  }
  
  // Exemplo de uso:
  
  // Criando usuário
  const usuario = new Usuario('João');
  
  // Criando lista de tarefas
  const listaPessoal = usuario.criarListaTarefas('Lista Pessoal');
  
  // Criando categorias
  const trabalho = usuario.criarCategoria('Trabalho');
  const casa = usuario.criarCategoria('Casa');
  
  // Criando tarefas
  const comprarLeite = new Tarefa('Comprar leite', '2023-01-15');
  const reuniaoEquipe = new Tarefa('Reunião de equipe', '2023-01-20');
  
  // Organizando tarefas na lista e categoria
  usuario.organizarTarefaEmLista(comprarLeite, listaPessoal);
  usuario.organizarTarefaEmCategoria(reuniaoEquipe, trabalho);
  
  // Marcando tarefa como concluída
  listaPessoal.marcarTarefaComoConcluida('Comprar leite');
  
  // Exibindo informações
  console.log(usuario.listasTarefas);
  console.log(trabalho);
  console.log(comprarLeite);
  