package com.example.aluno_api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.aluno_api.entity.Aluno;
import com.example.aluno_api.service.AlunoService;

@RestController
@RequestMapping("/aluno")
@CrossOrigin(origins = "http://localhost:27017/aluno")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @GetMapping
    public List<Aluno> listarAlunos() {
        return alunoService.listarAlunos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Aluno> buscarAlunoPorId(@PathVariable String id) {
        Optional<Aluno> aluno = alunoService.buscarAlunoPorId(id);
        return aluno.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Aluno criarAluno(@RequestBody Aluno aluno) {
        return alunoService.salvarAluno(aluno);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Aluno> atualizarAluno(@PathVariable String id, @RequestBody Aluno alunoAtualizado) {
        Optional<Aluno> alunoExistente = alunoService.buscarAlunoPorId(id);
        if (alunoExistente.isPresent()) {
            Aluno aluno = alunoExistente.get();
            aluno.setNome(alunoAtualizado.getNome());
            aluno.setCurso(alunoAtualizado.getCurso());
            aluno.setIra(alunoAtualizado.getIra());
            return ResponseEntity.ok(alunoService.salvarAluno(aluno));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarAluno(@PathVariable String id) {
        if (alunoService.buscarAlunoPorId(id).isPresent()) {
            alunoService.deletarAluno(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/test-save")
    public Aluno testSave() {
        Aluno aluno = new Aluno();
        aluno.setNome("Caio");
        aluno.setCurso("Ciência da Computação");
        aluno.setIra(10.0);
        
        return alunoService.salvarAluno(aluno);
    }
}
