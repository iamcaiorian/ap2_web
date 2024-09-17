var express = require('express');
var router = express.Router();

const AlunoService = require('../service/AlunoService');

router.get('/listar', function(req, res, next) {
    res.json(AlunoService.listarAlunos());
    }
);

router.get('/buscar/:id', function(req, res, next) {
    const id = req.params.id;
    res.json(AlunoService.buscarAlunoPorId(id));
    }
);

router.post('/adicionar', function(req, res, next) {
    const aluno = req.body;
    res.json(AlunoService.adicionarAluno(aluno));
    }
);

router.put('/atualizar', function(req, res, next) {
    const aluno = req.body;
    res.json(AlunoService.atualizarAluno(aluno));
    }
);

router.delete('/deletar/:id', function(req, res, next) {
    const id = req.params.id;
    AlunoService.deletarAluno(id);
    res.json({message: 'Aluno deletado com sucesso!'});
    }
);

module.exports = router;