class Aluno {
    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
    }
}

class Professor {
    constructor(nome, codigo) {
        this.nome = nome;
        this.codigo = codigo;
    }

    atribuirNota(aluno, disciplina, nota) {
        disciplina.atribuirNota(aluno, nota);
    }
}

class Disciplina {
    constructor(nome) {
        this.nome = nome;
        this.alunosMatriculados = [];
        this.notas = {};
    }

    matricularAluno(aluno) {
        this.alunosMatriculados.push(aluno);
        this.notas[aluno.matricula] = [];
    }

    atribuirNota(aluno, nota) {
        if (this.alunosMatriculados.includes(aluno)) {
            this.notas[aluno.matricula].push(nota);
        } else {
            console.log("Aluno não matriculado nesta disciplina.");
        }
    }

    calcularMediaAluno(aluno) {
        if (this.notas[aluno.matricula].length === 0) {
            console.log("O aluno não possui notas nesta disciplina.");
            return 0;
        }

        const somaNotas = this.notas[aluno.matricula].reduce((a, b) => a + b, 0);
        return somaNotas / this.notas[aluno.matricula].length;
    }

    verificarStatusAprovacao(aluno) {
        const media = this.calcularMediaAluno(aluno);
        return media >= 6 ? "Aprovado" : "Reprovado";
    }
}

class Turma {
    constructor(nome) {
        this.nome = nome;
        this.disciplinas = [];
        this.alunos = [];
    }

    adicionarDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
}

// Exemplo de uso:

const aluno1 = new Aluno("João", "A123");
const aluno2 = new Aluno("Maria", "A456");

const professor1 = new Professor("Dr. Silva", "P001");

const disciplinaMatematica = new Disciplina("Matemática");
disciplinaMatematica.matricularAluno(aluno1);
disciplinaMatematica.matricularAluno(aluno2);
professor1.atribuirNota(aluno1, disciplinaMatematica, 7);
professor1.atribuirNota(aluno2, disciplinaMatematica, 5);

console.log("Média de João em Matemática:", disciplinaMatematica.calcularMediaAluno(aluno1));
console.log("Status de aprovação de Maria em Matemática:", disciplinaMatematica.verificarStatusAprovacao(aluno2));
