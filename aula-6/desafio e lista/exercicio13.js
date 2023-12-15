// Classe Aluno
class Aluno {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  }
  
  // Classe Nota
  class Nota {
    constructor(valor, disciplina) {
      this.valor = valor;
      this.disciplina = disciplina;
    }
  }
  
  // Classe Disciplina
  class Disciplina {
    constructor(nome) {
      this.nome = nome;
      this.notas = [];
    }
  
    adicionarNota(nota) {
      this.notas.push(nota);
    }
  
    calcularMedia() {
      if (this.notas.length === 0) return 0;
  
      const soma = this.notas.reduce((total, nota) => total + nota.valor, 0);
      return soma / this.notas.length;
    }
  }
  
  // Classe Boletim
  class Boletim {
    constructor(aluno) {
      this.aluno = aluno;
      this.disciplinas = [];
    }
  
    adicionarDisciplina(disciplina) {
      this.disciplinas.push(disciplina);
    }
  
    consultarDesempenho() {
      console.log(`Desempenho de ${this.aluno.nome}:`);
      this.disciplinas.forEach((disciplina) => {
        const media = disciplina.calcularMedia();
        console.log(`${disciplina.nome}: Média ${media.toFixed(2)}`);
      });
    }
  }
  
  // Exemplos de uso
  const aluno1 = new Aluno("João", 16);
  const aluno2 = new Aluno("Maria", 17);
  
  const matematica = new Disciplina("Matemática");
  const historia = new Disciplina("História");
  
  matematica.adicionarNota(new Nota(8));
  matematica.adicionarNota(new Nota(7));
  
  historia.adicionarNota(new Nota(9));
  historia.adicionarNota(new Nota(8));
  
  const boletimJoao = new Boletim(aluno1);
  boletimJoao.adicionarDisciplina(matematica);
  boletimJoao.adicionarDisciplina(historia);
  
  boletimJoao.consultarDesempenho();
  // Saída esperada:
  // Desempenho de João:
  // Matemática: Média 7.50
  // História: Média 8.50
  
  const boletimMaria = new Boletim(aluno2);
  boletimMaria.adicionarDisciplina(matematica); // Maria faz a mesma disciplina de João
  
  boletimMaria.consultarDesempenho();
  // Saída esperada:
  // Desempenho de Maria:
  // Matemática: Média 7.50 (nota única de João, pois Maria não tem notas próprias)
  