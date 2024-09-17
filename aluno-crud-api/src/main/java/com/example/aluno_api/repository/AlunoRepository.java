package com.example.aluno_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.aluno_api.entity.Aluno;

@Repository
public interface AlunoRepository extends MongoRepository<Aluno, String> {
}
