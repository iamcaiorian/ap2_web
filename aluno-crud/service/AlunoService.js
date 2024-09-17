const AlunoModel = require('../models/AlunoModel');
const alunos = require('../data/data');

class AlunoService {

    static listarAlunos() {
        return alunos;
    }

    static buscarAlunoPorId(id) {
        return alunos.find(aluno => aluno.id == id);
    }

    static adicionarAluno(aluno) {
        const id = alunos.length + 1;
        aluno.id = id;
        alunos.push(aluno);
        return aluno;
    }

    static atualizarAluno(aluno) {
        const index = alunos.findIndex(a => a.id == aluno.id);
        alunos[index] = aluno;
        return aluno;
    }

    static deletarAluno(id) {
        const index = alunos.findIndex(a => a.id == id);
        alunos.splice(index, 1);
    }
}

module.exports = AlunoService;